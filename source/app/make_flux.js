//params:states::object, path::string, custom_reducers::object
//return [actions, reducers];
//cutomeReducer: {name_state: function}
function makeFlux (objects_of_states, path, custom_reducers = {}){
  var actions = {};
  var reducers = {};
  const action_type_reset = `${path}/SET_INITIALSTATE`.toUpperCase();

  for (const name in objects_of_states){
    const name_action = `set_${name}`;
    var action_type = `${path}/${name_action}`.toUpperCase();
    actions[name_action] = createActionCreator(action_type);
    reducers[name] = createReducer(objects_of_states[name],action_type, action_type_reset, custom_reducers[name]);
  }
  actions['set_initial_state'] = () => ({type: action_type_reset});
  return [reducers, actions];
}

const createActionCreator = (action_type) => {
  return (data) => ({
    type: action_type,
    payload: data,
  })
}

const createReducer = (initial_state, action_type, action_type_reset, func = null) => {
  return (state = initial_state, action = {}) => {
    if (action.type === action_type){
      return typeof(func) === 'function' ? func(state, action.payload) : action.payload;
    } else if (action.type === action_type_reset){
      return initial_state;
    } else {
      return state;
    }
  }
}

export default makeFlux;
