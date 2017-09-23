/**
 * Home.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Home">
        Home
      </div>
    );
  }
}

Home.propTypes = {};

export default connect((state) => {
  return {
    ...state,
  };
}, {

})(Home);
