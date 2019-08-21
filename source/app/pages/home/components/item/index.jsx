import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';
import ButtonLike from '../../../../components/button_like';
import Metadata from '../metadata';

function Item(props){
  return (
    <Link to="/post/test" className={style.content}>
      <div className={style.votes_content}>
        <ButtonLike likes={props.votes}/>
      </div>
      <div className={style.data_content}>
        <h2 className={style.title}>{props.title}</h2>
        <p className={style.description}>{props.description}</p>
        <Metadata {...props} />
      </div>
    </Link>
  )
}

export default Item;
