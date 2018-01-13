/**
 * Login.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import FormField from 'elemental/lib/components/FormField';
import FormInput from 'elemental/lib/components/FormInput';
import Button from 'elemental/lib/components/Button';

import Alert from 'components/Alert';

import userActions from 'store/user/actions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ``,
      password: ``,
      error: ``,
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
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          error: e,
        });
      })
  }

  render() {
    const { jwt } = this.props;
    const { error } = this.state;

    if (jwt) {
      return <Redirect to="/" />;
    }

    return (
      <div className="Login inner-wrap">
        <div className="Card">
          <div className="Card__header">
            Login
          </div>
          <div className="Card__body">
            <h2 className="Login__headline">
              Login to see Posts
            </h2>
            {
              error
                ? <Alert> { error } </Alert>
                : null
            }
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
            <Button onClick={ this.loginSubmit } submit>Login</Button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  jwt: PropTypes.string,
};

export default connect((state) => {
  return {
    jwt: state.user.auth.token,
  };
}, {
  login: userActions.login,
})(Login);
