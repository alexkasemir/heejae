/**
 * Home.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Feed from 'containers/Feed';

import postActions from 'store/post/actions';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { getPosts } = this.props;

    getPosts();
  }

  render() {
    return (
      <div className="Home">
        <Feed />
      </div>
    );
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
};

export default connect((state) => {
  return {
    ...state,
  };
}, {
  getPosts: postActions.getAll,
})(Home);
