import React from 'react';
import {List,InputItem,NavBar,Icon, Grid} from 'antd-mobile';
// import io from 'socket.io-client';
import {connect} from 'react-redux';
import {sendMsg, recvMsg, getMsgList} from '../../reducers/chat.reducer'

import {getChatId} from '../../util'
// const socket = io('ws://localhost:9093');

@connect(
    state=>state,
    {sendMsg, recvMsg, getMsgList}
)
class Chat extends React.Component{
    componentDidMount(){
        if (!this.props.Chat.chatmsg.length) {
            this.props.getMsgList();
            this.props.recvMsg();
        }

    }

    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    fixCarousel(){
        console.log('2121');
        setTimeout(function(){
            window.dispatchEvent(new Event('resize'))
        },0)
    }
    handleSubmit(){
        const from = this.props.User._id;
        const to = this.props.match.params.user;
        const msg = this.state.text;

        this.props.sendMsg({from, to, msg});
        this.setState({
            text:'',
            showEmoji:false
        })
    }
    render(){
        const emoji = '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 👍 👎 👊 ✊ 🤘 👌 👈 👉 👆 👇 ✋  🖐 🖖 👋  💪 🖕 ✍️  💅 🖖 💄 💋 👄 👅 👂 👃 👁 👀 '
            .split(' ')
            .filter(v=>v)
            .map(v=>({text:v}))

        const userid = this.props.match.params.user;
        const chatid = getChatId(userid, this.props.User._id);

        const users = this.props.Chat.users;
        if(!users[userid]){
            return null
        }
        console.log(users, userid);
        const chatmsgs = this.props.Chat.chatmsg.filter(v=>v.chatid === chatid);

        return (
            <div id='chat-page'>
                <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{
                        this.props.history.goBack()
                    }}
                >
                    {/*{this.props.match.params.user}*/}
                    {users[userid].name}
                </NavBar>

                {chatmsgs.map(v=>{
                    const avatar = require(`../../component/img/${users[v.from].avatar}.png`);
                    return v.from===userid?(
                        <List key={v._id}>
                            <List.Item
                                thumb={avatar}
                            >{v.content}</List.Item>
                        </List>

                    ):(
                        <List key={v._id}>
                            <List.Item
                                extra={<img src={avatar} alt=""/>}
                                className='chat-me'
                            >{v.content}</List.Item>
                        </List>
                    )
                })}


                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={

                                <div>
									<span
                                        style={{marginRight:15}}
                                        onClick={()=>{
                                            this.setState({
                                                showEmoji:!this.state.showEmoji
                                            })
                                            this.fixCarousel()
                                        }}
                                        role="img"
                                        aria-label="img"
                                    >😃</span>
                                    <span onClick={()=>this.handleSubmit()} >发送</span>
                                </div>
                            }
                        ></InputItem>
                    </List>

                    {this.state.showEmoji?<Grid
                        data={emoji}
                        columnNum={9}
                        carouselMaxRow={4}
                        isCarousel={true}
                        onClick={el=>{
                            this.setState({
                                text:this.state.text+el.text
                            })

                        }}
                    />:null}
                </div>



            </div>

        )

    }
}

export default Chat;
