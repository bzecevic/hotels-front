import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import * as hotelsActions from '../actions/hotelActionsCreator';
import {getAllHotels} from '../actions/hotelActionsCreator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAllHotels();
  }

  render() {
    return (
      <Row>
        <Col md={6}>
          <p>Some text left</p>
          {this.props.hotels.length && <p>Hotels number: {this.props.hotels.length}</p>}

          {this.props.hotels.map((hotel,i) => {
            return <div style={{marginBottom:'20px'}} key={i}>
              <div><h2>{hotel.name}</h2></div>
              <div>{hotel.description}</div>
            </div>
          })}

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

// function mapDispatchToProps(dispatch) {
//   return {
//     hotelsActions: bindActionCreators(hotelsActions, dispatch)
//   }
// }

// export default connect(mapStateToProps,mapsDispatchToProps)(DashboardPage);

export default connect(mapStateToProps,hotelsActions)(DashboardPage);


