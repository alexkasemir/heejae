/**
 * Header.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Logo from 'components/Logo';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Header">
        <div className="Header__content">
          <div className="float-left Header__logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </div>
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
