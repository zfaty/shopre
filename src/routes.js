import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Register from './containers/register';
import Login from './containers/login';
import HomeIndex from './components/home_index';
import SearchResult from './containers/search_result';

export default(
  <Route path="/" component={ App }>
    <IndexRoute component={HomeIndex} />
    <Route path="register" component={Register} />
    <Route path="login" component={Login} />
    <Route path="search/:term" component={SearchResult} />
  </Route>
);
