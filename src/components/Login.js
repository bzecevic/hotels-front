import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import * as hotelsActions from '../actions/hotelActionsCreator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class LoginPage extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Row>
        <Col md={6}>
          <div>Login page</div>
        </Col>
      </Row>)
  }
}

function mapStateToProps(state) {
  return {
    hotels: state.hotels
  }
}


function mapDispatchToProps(dispatch) {
  return {
    hotelsActions: bindActionCreators(hotelsActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);


