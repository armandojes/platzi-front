import React from 'react';
import style from './loading.css';
import Container from '../../components/container';
import ButtonLike from '../../components/button_like';
import MetaData from '../../components/metadata';
import { Link } from 'react-router-dom';

function PostPrimary (props){
  return (
    <section className={style.content_loading}>
      <Container>
        <div className={style.body_loading}>
          <div className={style.data_content_loading}>
            <div className={style.votes_loading}>
              <div className={`${style.button_like} b_color`}></div>
            </div>
            <div className={style.data_loading}>
              <div className={`${style.title} b_color`}/>
              <div className={`${style.title} b_color`}/>
              <div className={`${style.metadata} b_color`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PostPrimary;
