import React, { useEffect, useState } from 'react';
import style from './style';
import { Link } from 'react-router-dom';



function PagesNavigator (props) {

  const { num_pages, current_page, path } = props;


  const generate_list_pages = () => {
    var list_of_pages = [];
    if (current_page < 4){
      for (var index = 1; index <= 5 && index <= num_pages; index++) {
        list_of_pages.push(index);
      }
    }else{
      for (var index = current_page - 2; index <= current_page + 2 && index <= num_pages; index++) {
        list_of_pages.push(index);
      }
    }
    return list_of_pages;
  }

  const pages = generate_list_pages();

  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        {current_page > 1 && (
          <Link
            className={style.item}
            to={`${path}/${current_page - 1}`}>
            &lt; Anterior
          </Link>
        )}
        <div className={style.pages_content}>
          {pages.map((page) => {
            const classname = page == current_page ? style.item_selected : '';
            return (
              <Link className={`${style.item} ${classname}`} to={`${path}/${page}`} key={page} >
                {page}
              </Link>
            )
          })}
        </div>
        {current_page < num_pages && (
          <Link
            className={style.item}
            to={`${path}/${current_page + 1}`}>
            Siguente &gt;
          </Link>
        )}
      </div>
    </section>
  )
}

export default PagesNavigator;
