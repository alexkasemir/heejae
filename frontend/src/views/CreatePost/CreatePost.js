/**
 * CreatePost.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';

export class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="CreatePost">
        CreatePost
      </div>
    );
  }
}

CreatePost.propTypes = {};

export default connect((state) => {
  return {
    ...state,
  };
}, {

})(CreatePost);
