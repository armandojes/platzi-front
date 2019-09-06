import React from 'react';
import Header from './components/header'
import './global_style';
import {Switch, Route} from 'react-router';
import Home from './pages/home';
import Posts from './pages/Posts';
import Post from './pages/post';
import Error404 from './pages/error404';
import PostsUser from './pages/posts_user';


const App = () => (
  <div role="aplication">
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user/:username" exact component={PostsUser} />
      <Route path="/post/:url" exact component={Post} />
      <Route path="/posts/:type/:page" exact component={Posts} />
      <Route path="/posts/:type/:query/:page" exact component={Posts} />
      <Route  component={Error404} />
    </Switch>
  </div>
);

export default App;
