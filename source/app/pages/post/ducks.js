import make_flux from '../../make_flux.js';
import apiFirestore from '../../firesstoreApi.js';
import {combineReducers} from 'redux';

const initial_state = {
  post: 'loading',
  comments: 'loading',
}

export const load_post = (url) => async (dispatch) => {
  dispatch(set_post('loading'));
  const response = await apiFirestore.fetchSingle({ collection: 'posts', url });
  dispatch(set_post(response))
}


export const load_comments  = (id_post) => async (dispatch) => {
  // dispatch(set_comments('loading'));
  // const response = await api.get_comments(id_post);
  // dispatch(set_comments(response.data));
}

const [reducers, actions] = make_flux(initial_state, '/post');
const {set_post, set_comments, set_initial_state} = actions;

export {set_initial_state};

export default combineReducers(reducers);
