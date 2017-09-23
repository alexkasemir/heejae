/**
 * CreateWorkout.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './CreateWorkout.css';

export class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="CreateWorkout">
        CreateWorkout
      </div>
    );
  }
}

CreateWorkout.propTypes = {};

export default connect((state) => {
  return {
    ...state,
  };
}, {

})(CreateWorkout);
