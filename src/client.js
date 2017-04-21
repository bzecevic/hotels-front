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

function doSometing(nextState, replace) {
  console.log('doing something...');
  // let role = localStorage.getItem('r');
  // let token = localStorage.getItem('auth');
  // let run = localStorage.getItem('run');
  // if (!token && (role == 0 || !role)) {
  //   localStorage.removeItem('auth');
  //   replace(`/administer/${run}/login`);
  // } else if(role == 1) {
  //   replace(`/rank/${run}/login`);
  // }
  console.log('doing something end.');
  return;
}

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={DashboardPage}/>
          <Route path="/dash" component={DashboardPage}/>
          <Route path="/fav" component={FavoritesPage}/>
        </Route>
        <Route path="/login" component={Login} onEnter={doSometing}/>
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
