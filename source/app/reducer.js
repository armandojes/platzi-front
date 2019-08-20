import { combineReducers } from 'redux';

import post_primary from './sections/post_primary/ducks.js';
import pages_reducer from './pages/reducer';

export default combineReducers({post_primary, pages: pages_reducer});
