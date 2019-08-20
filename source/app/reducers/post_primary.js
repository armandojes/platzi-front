import initial_state from '../initial_state.js';
import make_flux from '../make_flux.js';
import {combineReducers} from 'redux';

const [reducers, actions] = make_flux(initial_state.post_primary, 'post_primary');

export default combineReducers(reducers);
