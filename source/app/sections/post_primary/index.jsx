import React from 'react';
import { useFetch } from 'react-fetch-ssr';
import { connect } from 'react-redux';
import View from '../../components/post_primary';
import Loading from '../../components/post_primary/loading.jsx';
import { load_primary_post } from './ducks'

function PostPrimary (props){

  useFetch(async () => {
    if (!props.data)
    await props.dispatch(load_primary_post());
  },[]);

  if (!props.loading && props.data) return (<View {...props.data}/>);
  return (<Loading />);
}

function mapStateToProps (state){
  return {
    loading: state.post_primary.loading,
    data: state.post_primary.data,
  }
}

export default connect(mapStateToProps)(PostPrimary);
