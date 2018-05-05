import { combineReducers } from 'redux';
import { User } from './user.reducer'
import { ChatUser } from './chatuser.reducer'

export default combineReducers({User, ChatUser});
