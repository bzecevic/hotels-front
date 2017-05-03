import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import * as loginActions from '../actions/loginActionsCreator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.setState({username: this.refs.username.value, password: this.refs.pass.value});
    console.log('asdf', this.props.user);
  }

  handleUsernameChange() {
    let username = this.refs.username.value;
    this.setState({username});
  }
  handlePasswordChange() {
    let pass = this.refs.pass.value;
    this.setState({password: pass});
  }

  handleSubmit() {
    console.log('username: ', this.state.username, 'pass: ', this.state.password);
    let obj = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.login(obj);
  }

  render() {
    return (
      <Row>
        <Col md={3} mdOffset={4}>
          <div className="text-center"><h2>Login Page</h2></div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" placeholder="username" ref="username" onChange={this.handleUsernameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" ref="pass" onChange={this.handlePasswordChange}/>
          </div>
          <button className="btn btn-primary btn-block" onClick={this.handleSubmit} disabled={this.props.user.submitting}>Sign In</button>
        </Col>
      </Row>)
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,{...loginActions})(LoginPage);


