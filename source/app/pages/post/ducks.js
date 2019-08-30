import make_flux from '../../make_flux.js';
import api from '../../api.js';
import {combineReducers} from 'redux';

const initial_state = {
  post: 'loading',
  comments: 'loading',
}

export const load_post = (id_post) => async (dispatch) => {
  dispatch(set_post('loading'));
  const response = await api.get_single(id_post);
  if (response.error){
    dispatch(set_post('error'));
  }else{
    dispatch(set_post(response.data))
  }
}

const [reducers, actions] = make_flux(initial_state, '/post');
const {set_post, set_comments, set_initial_state} = actions;

export {set_initial_state};

export default combineReducers(reducers);
