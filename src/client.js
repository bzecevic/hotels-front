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

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={DashboardPage}/>
          <Route path="/dash" component={DashboardPage}/>
          <Route path="/fav" component={FavoritesPage}/>
        </Route>
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
