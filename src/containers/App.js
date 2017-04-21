/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from '../actions/';
import Main from '../components/App';
import DashboardPage from './DashboardPage';
import {Row, Col, Nav} from 'react-bootstrap';
import {Link} from 'react-router';


class App extends Component {
  render() {
    return (
      <div style={{padding: '20px'}}>
        <div className="text-center">
          <Link key={1} to={'/'}>Home</Link>
          {' | '}
          <Link key={2} to={'/dash'}>Dashboard</Link>
          {' | '}
          <Link key={3} to={'/fav'}>Favorites</Link>
        </div>

        <div className="our-custom-content-wrapper">
          {this.props.children}
        </div>

      </div>
    )
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({})
};
function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
