import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import DashboardPage from './containers/DashboardPage';
import ErrorPage from './containers/ErrorPage';
import FavoritesPage from './components/Favorites/FavoritesPage';
import Login from './components/Login';

const store = configureStore();


function isAuth(nextState, replace) {
  let token = localStorage.getItem('token');
  if (!token) {
    replace(`/login`);
  }
  return;
}
function auth(nextState, replace) {
  if(localStorage.getItem('token')) {
    replace('/dash');
  }
  return;
}

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={DashboardPage}/>
          <Route path="/dash" component={DashboardPage} onEnter={isAuth}/>
          <Route path="/fav" component={FavoritesPage}/>
        </Route>
        <Route path="/login" component={Login} onEnter={auth}/>
        <Route path="*" component={ErrorPage}/>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

/*
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
*/
