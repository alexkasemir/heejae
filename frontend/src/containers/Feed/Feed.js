/**
 * Feed.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Post from 'components/Post';

import postSelectors from 'store/post/selectors';
import postActions from 'store/post/actions';

const scrollHeight = () => {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + window.scrollY;
};

const documentHeight = () => {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
  );
};

export class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    window.addEventListener(`scroll`, this.loadMore);
  }

  componentWillUnmount = () => {
    window.removeEventListener(`scroll`, this.loadMore);
  }

  loadMore = () => {
    const {
      postsMeta,
      getPosts,
    } = this.props;

    const { next, loading, loaded } = postsMeta;

    const distanceFromBottom = Math.floor(documentHeight()) - Math.floor(scrollHeight());

    if (distanceFromBottom < 100 && !loading && next) {
      getPosts(true); //get more
    }
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
    postsMeta: state.post.meta,
  };
}, {
  getPosts: postActions.getAll,
})(Feed);
