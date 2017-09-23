/**
 * Header.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Header">
        Header
      </div>
    );
  }
}

Header.propTypes = {};

export default connect((state) => {
  return {
    ...state,
  };
}, {

})(Header);
