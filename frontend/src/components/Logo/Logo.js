/**
 * Logo.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import logo from 'assets/tufts-logo-blue.png';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Logo">
        <img src={ logo } alt="Logo for Heejae" className="Logo__image" />
      </div>
    );
  }
}

Logo.propTypes = {};

