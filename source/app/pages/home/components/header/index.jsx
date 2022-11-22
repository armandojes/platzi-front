import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';
import {withRouter} from 'react-router-dom';
import {set_type,set_initial_state, set_items } from '../../ducks'


function Header (props){
  const [renderSelect, set_render_select] = useState(false);
  

  useEffect(() => {
    set_render_select(true);
  },[]);

  function handleChangeType(e){
    props.match.path != '/' && (props.history.push('/'));
    props.set_initial_state();
    props.set_type(e.target.value)
  }

  return (
    <View
      {...props}
      renderSelect={renderSelect}
      handleChangeType={handleChangeType}
    />
  )
}

const dispatchToProps = {
  set_type,
  set_items,
  set_initial_state
}

function mapStateToProps (state){
  return {
    type: state.pages.home.type,
    items: state.pages.home.items,
    loading: state.pages.home.loading,
    error: state.pages.home.error,
  }
}

export default withRouter(connect(mapStateToProps, dispatchToProps)(Header))
