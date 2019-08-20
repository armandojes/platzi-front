import make_flux from '../../make_flux.js';
import api from '../../api.js';
import {combineReducers} from 'redux';

const initial_state = {
  type: 'news',
  query: '',
  items: [],
  num_items: 0,
  num_pages: 0,
  loading: false,
}

function items_reducer(state, payload){
  return state.concat(payload);
}

const [reducers, actions] = make_flux(initial_state, '/home',{items: items_reducer} );
export const {set_type, set_query, set_items, set_num_items, set_num_pages, set_loading, set_initial_state} = actions;

export default combineReducers(reducers);
