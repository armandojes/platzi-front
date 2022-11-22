import make_flux from '../../make_flux.js';
import apiFirestore from '../../firesstoreApi.js';
import { combineReducers } from 'redux';
import firesstoreApi from '../../firesstoreApi.js';


const initial_state = {
  next: null,
  type: 'news',
  items: [],
  loading: false,
}

// items array  = vaciar estado
// array no vacio concatenar resultado.
function items_reducer(state, payload){
  return payload.length  === 0
  ? payload
  : state.concat(payload);
}

const [reducers, actions] = make_flux(initial_state, '/home',{items: items_reducer} );
export const { set_type, set_items, set_loading, set_initial_state, set_next } = actions;

export const load_news = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const next = state.pages.home.next;
  const response = await apiFirestore.fetchList({ collection: 'posts', pageSize: 20, nextPageToken: next });
  dispatch(set_items(response.documents));
  dispatch(set_next(response.nextPageToken));
  dispatch(set_loading(false));
};

export const load_voteds = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const next = state.pages.home.next;
  const response = await firesstoreApi.fetchList({ collection: 'posts', nextPageToken: next, orderBy: 'votes+desc' });
  dispatch(set_items(response.documents));
  dispatch(set_next(response.nextPageToken))
  dispatch(set_loading(false));
}

export default combineReducers(reducers);
