/**
 * Feed.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Post from 'components/Post';

import postSelectors from 'store/post/selectors';

export class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { allPosts } = this.props;

    const posts = allPosts.map((p) => {
      return <Post key={ p.id } data={ p } />;
    });

    return (
      <div className="Feed">
        {posts}
      </div>
    );
  }
}

Feed.propTypes = {
  allPosts: PropTypes.array.isRequired,
};

export default connect((state) => {
  return {
    allPosts: postSelectors.allPosts(state),
  };
}, {
})(Feed);
