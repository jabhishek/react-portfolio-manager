import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {routes} from './routes';
import reducers from './reducers/index';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore, routerReducer, routerMiddleware, push} from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {getLoggedInUser, saveUser, logoutUser} from './actionCreators/authActions';
import {getPortfolios} from './actionCreators/portfolioActions';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});
const logger = createLogger({
  duration: true,
  collapsed: true
});

const middleware = applyMiddleware(
  logger, thunk,
  routerMiddleware(browserHistory)
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(middleware));

const history = syncHistoryWithStore(browserHistory, store);

function renderApp () {
  render((
    <Provider store={store}>
      <Router history={history}>
        { routes }
      </Router>
    </Provider>
  ), document.getElementById('root'));
}

getLoggedInUser()
  .then((user) => {
    store.dispatch(saveUser(user));
    store.dispatch(getPortfolios())
      .then(() => renderApp());
  }).catch(() => {
    const path = store.getState().routing.locationBeforeTransitions.pathname;

    if (path !== '/login-redirect') {
      store.dispatch(logoutUser());
      store.dispatch(push('login'));
    }
    renderApp();
  });
