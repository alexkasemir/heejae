/**
 * Header.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Logo from 'components/Logo';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <div className="Header">
        <div className="Header__content">
          <div className="Header__logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="Header__welcome">
            {
              user
                ? `Welcome: ${user.username}`
                : ``
            }
          </div>
          { isAuthenticated
            ? <div className="Header__buttons">
              <Link to="/createPost">
                Post
              </Link>
              <Link to="/createWorkout">
                Post Workout
              </Link>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect((state) => {
  return {
    user: state.user.meta.user,
  };
}, {

})(Header);
