import React from 'react';
import Header from './components/header'
import './global_style';
import './monokai';
import {Switch, Route} from 'react-router';
import Home from './pages/home';
import Post from './pages/post';
import Error404 from './pages/error404';

const App = () => (
  <div role="aplication">
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/post/:url" exact component={Post} />
      <Route  component={Error404} />
    </Switch>
  </div>
);

export default App;
