import { combineReducers } from 'redux';

//pages reducers
import home_reducer from './home/ducks';

export default combineReducers({home: home_reducer});
