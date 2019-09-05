import { combineReducers } from 'redux';

//pages reducers
import home_reducer from './home/ducks';
import post_reducer from './post/ducks';
import posts_user_reducer from './posts_user/ducks';

export default combineReducers({home: home_reducer, post: post_reducer, posts_user: posts_user_reducer});
