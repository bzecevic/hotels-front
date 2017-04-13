import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import Main from '../components/App';
import * as request from '../Utils/request';
import * as hotelsActions from '../actions/hotelActionsCreator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.hotelsActions.getAllHotels();
  }

  render() {
    return (
      <Row>
        <Main/>
        <Col md={6}>
          {this.props.hotels.length}
          {this.props.hotels.map((hotel,i) => {
            return <div style={{marginBottom:'20px'}} key={i}>
              <div><h2>{hotel.name}</h2></div>
              <div>{hotel.description}</div>
            </div>
          })}
          <p>Some text left</p>
        </Col>

        <Col md={6}>
          <p>Some text right</p>
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

export default connect(mapStateToProps,mapDispatchToProps)(DashboardPage);


