/**
 * Login.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import FormField from 'elemental/lib/components/FormField';
import FormInput from 'elemental/lib/components/FormInput';
import Button from 'elemental/lib/components/Button';

import userActions from 'store/user/actions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ``,
      password: ``,
    };
  }

  onChange = (key) => {
    return (e) => {
      const { value } = e.target;

      this.setState({
        [key]: value,
      });
    };
  }

  loginSubmit = (e) => {
    const { login, history } = this.props;
    e.preventDefault();
    login(this.state)
      .then(() => {
        history.push(`/`);
      });
  }

  render() {
    return (
      <div className="Login">
        <div className="Card">
          <div className="Card__header">
            Login
          </div>
          <div className="Card__body">
            <h2 className="Login__headline">
              Login to see Heejae penises
            </h2>
            <FormField label="Participant ID">
              <FormInput onChange={ this.onChange(`username`) } autoFocus placeholder="Enter Participant ID" />
            </FormField>
            <FormField label="Password" htmlFor="basic-form-input-password">
              <FormInput
                onChange={ this.onChange(`password`) }
                type="password"
                placeholder="Password"
                name="basic-form-input-password"
              />
            </FormField>
            <Button onClick={ this.loginSubmit } submit>Submit to jerk heejae off</Button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect((state) => {
  return {
    jwt: state.user.auth.token,
  };
}, {
  login: userActions.login,
})(Login);
