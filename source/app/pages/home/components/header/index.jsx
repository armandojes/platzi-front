import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import View from './view.jsx';
import {withRouter} from 'react-router-dom';
import {set_type,set_initial_state, set_query, set_items, set_current_page} from '../../ducks'


function Header (props){
  const input_ref = useRef(null);
  const [renderSelect, set_render_select] = useState(false);

  useEffect(() => {
    set_render_select(true);
  },[]);

  useEffect(() => {
    props.query.length && (input_ref.current.focus());
  },[props.query])

  function handleChangeType(e){
    props.match.path != '/' && (props.history.push('/'));
    props.set_initial_state();
    props.set_type(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  function handleChange(e) {
    if (e.target.value.length){
      props.type != 'search' && (props.set_type('search'));
      props.items.length > 0 && (props.set_items([]));
      props.current_page != 0 && (props.set_current_page(0));
      props.match.path != '/' && (props.history.push('/'));
      props.set_query(e.target.value)
    } else {
      props.match.path != '/' && (props.history.push('/'));
      props.set_initial_state();
      props.set_type('news');
    }
  }

  return (
    <View
      {...props}
      renderSelect={renderSelect}
      input_ref={input_ref}
      handleChangeType={handleChangeType}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  )
}

const dispatchToProps = {
  set_type,
  set_query,
  set_items,
  set_current_page,
  set_initial_state
}

function mapStateToProps (state){
  return {
    type: state.pages.home.type,
    query: state.pages.home.query,
    items: state.pages.home.items,
    num_items: state.pages.home.num_items,
    num_pages: state.pages.home.num_pages,
    loading: state.pages.home.loading,
    current_page: state.pages.home.current_page,
    error: state.pages.home.error,
  }
}

export default withRouter(connect(mapStateToProps, dispatchToProps)(Header))
