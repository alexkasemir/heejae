/**
 * Post.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FAHeart from 'react-icons/lib/fa/heart';

import Image from 'components/Image';


export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { data } = this.props;

    return (
      <div className="Post">
        <div className="Card">
          <div className="Card__header">
            Posted by: User #{data.user}
          </div>
          <div className="Card__body">
            <Image
              src={ data.url }
              alt={ `Post by user #${data.user}`}
              width="100%"
            />
            <div>
              <FAHeart />
              Liked By: { data.like_count } People
              <FAHeart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

