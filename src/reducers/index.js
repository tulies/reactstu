import { combineReducers } from 'redux';
import { User } from './user.reducer'
import { ChatUser } from './chatuser.reducer'
import { Chat } from './chat.reducer'

export default combineReducers({User, ChatUser, Chat});
