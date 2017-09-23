/**
 * Login.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Login">
        Login
      </div>
    );
  }
}

Login.propTypes = {};

export default connect((state) => {
  return {
    ...state,
  };
}, {

})(Login);
