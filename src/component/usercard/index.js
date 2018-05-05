import React from 'react';
import PropTypes from 'prop-types';
import { WhiteSpace, Card, WingBlank} from 'antd-mobile';
import { withRouter } from 'react-router-dom';

@withRouter
class UserCard extends React.Component{
    static propTypes = {
        userlist: PropTypes.array.isRequired,
    };

    render(){
        return (
            <WingBlank size="lg">
                {this.props.userlist.map(v=>(
                    <div key={v._id}>
                        <WhiteSpace  />
                        <Card>
                            <Card.Header
                                title={v.uname}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            />
                            <Card.Body>
                                {v.type === 'boss' ? <div>公司：{v.company}</div> : null}
                                <div>{v.desc.split('\n').map(v=>(
                                    <div key={v}>{v}</div>
                                ))}</div>
                                {v.type==='boss'? <div>薪资:{v.money}</div> :null}
                            </Card.Body>
                            {/*<Card.Footer content="footer content" extra={<div>extra footer content</div>} />*/}
                        </Card>
                    </div>
                ))}
                <WhiteSpace />

            </WingBlank>
        );

    }
}
export default UserCard;