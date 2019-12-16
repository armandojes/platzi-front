import make_flux from '../../make_flux.js';
import api from '../../api.js';
import { combineReducers } from 'redux';


const initial_state = {
  type: 'news',
  query: '',
  items: [],
  num_items: 0,
  num_pages: 0,
  loading: false,
  current_page: 0,
  error: false,
}

// items array  = vaciar estado
// array no vacio concatenar resultado.
function items_reducer(state, payload){
  return payload.length  === 0
  ? payload
  : state.concat(payload);
}

const [reducers, actions] = make_flux(initial_state, '/home',{items: items_reducer} );
export const {set_error, set_type, set_query, set_items, set_num_items, set_num_pages, set_loading, set_current_page, set_initial_state} = actions;

export const load_news = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const current_page = state.pages.home.current_page;
  const response = await api.get_list(current_page + 1);
  if (!response.error){
    dispatch(set_items(response.items));
    dispatch(set_num_pages(response.num_pages));
    dispatch(set_num_items(response.num_items));
    dispatch(set_current_page(current_page + 1))
  } else {
    dispatch(set_error(true));
  }
  dispatch(set_loading(false));
};

export const load_voteds = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const current_page = state.pages.home.current_page;
  const response = await api.get_list_voteds(current_page + 1);
  if (!response.error){
    dispatch(set_items(response.items));
    dispatch(set_num_pages(response.num_pages));
    dispatch(set_num_items(response.num_items));
    dispatch(set_current_page(current_page + 1))
  } else {
    dispatch(set_error(true));
  }
  dispatch(set_loading(false));
}


export const load_search = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const {current_page, query}  = state.pages.home;
  const response = await api.get_result(query,current_page + 1);
  if (!response.error){
    dispatch(set_items(response.items));
    dispatch(set_num_pages(response.num_pages));
    dispatch(set_num_items(response.num_items));
    dispatch(set_current_page(current_page + 1))
  } else {
    dispatch(set_error(true));
  }
  dispatch(set_loading(false));
}

export default combineReducers(reducers);
