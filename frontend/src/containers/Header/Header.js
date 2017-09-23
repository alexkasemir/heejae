/**
 * Header.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';

import Dropdown from 'elemental/lib/components/Dropdown';
import FaMenu from 'react-icons/fa/bars';

import Logo from 'components/Logo';

import userActions from 'store/user/actions';

const DROPDOWN_ITEMS = [
  {
    value: { type: `link`, url: `/` },
    label: `Home`,
  },
  {
    value: { type: `link`, url: `/createWorkout` },
    label: `Submit a Workout`,
  },
  {
    value: { type: `link`, url: `/createPost` },
    label: `Submit an Image`,
  },
  {
    value: { type: `logout` },
    label: `Log Out`,
  },
];


export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onSelect = (v) => {
    const { logout, history } = this.props;

    switch (v.type) {
      case `link`:
        history.push(v.url);
        break;
      case `logout`:
        logout();
        break;
      default:
        console.error(`${v.type} is not defined`); // eslint-disable-line
        break;
    }
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
            ? <Dropdown
              items={ DROPDOWN_ITEMS }
              onSelect={ this.onSelect }
              alignRight
              className="Header__menu"
            >
              <FaMenu size="2em" />
            </Dropdown>
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
  logout: PropTypes.func.isRequired,
  history: PropTypes.object,
};

export default withRouter(connect((state) => {
  return {
    user: state.user.meta.user,
  };
}, {
  logout: userActions.logout,
})(Header));
