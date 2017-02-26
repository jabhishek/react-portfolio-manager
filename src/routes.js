import Trades from './components/trades-page/trades-page-connect';
import Portfolios from './components/portfolios/portfolio-connect';
import LoginRedirect from './components/login/login-redirect';
import LoginPage from './components/login/login-page';
import Portfolio from './components/portfolio/portfolio-container';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import React from 'react';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Trades}/>
    <Route path="/login-redirect" component={LoginRedirect}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/portfolios" component={Portfolios}/>
    <Route path="/portfolio/:id" component={Portfolio}/>
  </Route>
);
