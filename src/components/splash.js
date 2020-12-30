import React, { Component } from 'react';

class Splash extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <span className="loader">
          <span className="loader-inner"></span>
        </span>
      </div>
    );
  }
}

export default Splash;