import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';


class DashboardPage extends React.Component {


  render() {
    return (
      <Row>
        <Col md={6}>
          <p className="text-center">Error, route do not exist!</p>
        </Col>
      </Row>)
  }
}

export default DashboardPage;
