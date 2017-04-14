import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import RegisterPage from './containers/register_page';
import LoginPage from './containers/login_page';
import HomeIndex from './components/home_index';
import SearchResult from './containers/search_result';

export default(
  <Route path="/" component={ App }>
    <IndexRoute component={HomeIndex} />
    <Route path="login" component={LoginPage} />
    <Route path="register" component={RegisterPage} />
    <Route path="search/:term" component={SearchResult} />
  </Route>
);
