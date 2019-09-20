import React from 'react';
import Header from './components/header';
import Alert from './components/alert';
import Firm from './components/firm';
import History from './components/history';
import BackEnd from './components/backend';
import Finally from './components/finally';
import FrontEnd from './components/frontend';
import SSR from './components/SSR';
import style from './style';
import Container from '../../components/container'

function About (props){
  return (
    <div className={style.wrapper}>
      <Header />
      <Container>
        <div className={style.container_body}>
          <Alert />
          <History />
          <BackEnd />
          <FrontEnd />
          <SSR />
          <Finally />
        </div>
        <Firm />
      </Container>
    </div>
  )
}

export default About;
