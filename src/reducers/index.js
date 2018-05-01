import { combineReducers } from 'redux';
import { Counter } from './Counter.reducer'
import { Auth } from './Auth.reducer'

export default combineReducers({Counter, Auth});
