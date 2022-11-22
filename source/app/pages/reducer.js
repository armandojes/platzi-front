import { combineReducers } from 'redux';

//pages reducers
import home_reducer from './home/ducks';
import post_reducer from './post/ducks';

export default combineReducers({home: home_reducer, post: post_reducer });
