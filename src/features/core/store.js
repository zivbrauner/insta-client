import {createStore,combineReducers} from 'redux';
import UserReducer from './userReducer';
import PostsReducer from './postsReducer';


const store = createStore(combineReducers({UserReducer, PostsReducer}));

export default store;