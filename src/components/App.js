import React from 'react';
import PropTypes from 'prop-types';
import YeomanImage from './YeomanImage';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <YeomanImage />
        <div className="notice">
          Please edit <code>src/components/App.js</code> to get started!
        </div>
      </div>
    );
  }
}

AppComponent.propTypes = {
  actions: PropTypes.object
};

AppComponent.defaultProps = {
};

export default AppComponent;
