import React from 'react';
import style from './style';
import Container from '../../components/container';
import ButtonLike from '../../components/button_like';
import MetaData from '../../components/metadata';
import { Link } from 'react-router-dom';

function PostPrimary (props){
  return (
    <section className={style.content} style={{backgroundImage: `url(${props.cover})`}}>
      <Container>
        <div className={style.body}>
          <div className={style.data_content}>
            <div className={style.votes}>
              <ButtonLike likes={props.votes}/>
            </div>
            <div className={style.data}>
              <Link to={`/post/${props.url}`} className={style.title}>{props.title}</Link>
              <MetaData {...props}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PostPrimary;
