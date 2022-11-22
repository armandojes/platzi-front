const initial_state = {
  loading: false,
  data: null,
}

import make_flux from '../../make_flux.js';
import apiFirestore from '../../firesstoreApi.js';
import {combineReducers} from 'redux';

export const load_primary_post = () => async (dispatch) => {
  dispatch(set_loading(true));
  const response = await apiFirestore.fetchSingle({ collection: 'post_primary', url: 'primary_post' });
  dispatch(set_data(response));
  dispatch(set_loading(false));
}


const [reducers, actions] = make_flux(initial_state, 'post_primary');
const {set_loading, set_data} = actions;

export default combineReducers(reducers);
