import make_flux from '../../make_flux.js';
import api from '../../api.js';
import {combineReducers} from 'redux';

const initial_state = {
  items: [],
  num_items: 0,
  num_pages: 0,
  loading: false,
  current_page: 0,
  error: false,
}

function itemsReducer (state, payload) {
  return state.concat(payload);
}
const [reducers, actions] = make_flux(initial_state, '/posts_user', {items: itemsReducer});

const {
  set_items,
  set_num_items,
  set_num_pages,
  set_loading,
  set_current_page,
  set_error,
  set_initial_state
} = actions;


export const load_posts = (username) => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const current_page = state.pages.posts_user.current_page;
  const response = await api.get_posts_user(username, current_page + 1);
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

export {
  set_items,
  set_num_items,
  set_num_pages,
  set_loading,
  set_current_page,
  set_error,
  set_initial_state,
}
export default combineReducers(reducers);
