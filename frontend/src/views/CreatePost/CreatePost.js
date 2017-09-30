/**
 * CreatePost.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'elemental/lib/components/Button';

import Image from 'components/Image';
import ImageButton from 'components/ImageButton';


import pendingActions from 'store/pending/actions';
import postActions from 'store/post/actions';
import alertActions from 'store/alert/actions';

const POST_ID = `__POST`;


export class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { createPendingPost } = this.props;

    const data = {};

    createPendingPost({
      changes: data,
      id: POST_ID,
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    const { deletePendingPost } = this.props;
    deletePendingPost({ id: POST_ID });
  }

  onFileChange = (data) => {
    const { updatePendingPost } = this.props;
    // const post = pending[POST_ID];
    console.log(data);

    updatePendingPost({
      changes: {
        fileURI: data.fileURI,
        fileName: data.fileName,
        fileType: data.fileType,
        fileAdded: true,
      },
      id: POST_ID,
    });
  }

  onFileRemove = () => {
    const { updatePendingPost } = this.props;
    updatePendingPost({
      changes: {
        fileURI: null,
        fileName: null,
        fileType: null,
      },
      id: POST_ID,
    });
  }

  create = () => {
    const {
      pending,
      createPost,
      history,
    } = this.props;
    const data = pending[POST_ID];

    createPost(data)
      .then(() => {
        history.push(`/`);
      });
  }

  render() {
    const {
      pending,
      addAlert,
    } = this.props;
    const data = pending[POST_ID] || {};

    const uploadedImage = data.fileURI
      ? (
        <div className="center">
          <Image
            src={ data.fileURI }
            width="100%"
            alt={ `${data.fileName}` }
            className="CreatePost__image"
          />
          <Button className="CreatePost__close" onClick={ this.onFileRemove } >
            Change image
          </Button>
        </div>
      )
      : null;

    return (
      <div className="CreatePost inner-wrap-full">
        <div className="Card">
          <div className="Card__header">
            <h3 className="center">
              Post
            </h3>
          </div>
          <div className="Card__body">
            {uploadedImage || (
              <div className="CreatePost__attachment-wrapper">
                <ImageButton
                  updateImage={ this.onFileChange }
                  addAlert={ addAlert }
                />
              </div>
            )}
            <Button onClick={ this.create }>
              Post
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = {
  pending: PropTypes.object,
  createPendingPost: PropTypes.func.isRequired,
  updatePendingPost: PropTypes.func.isRequired,
  deletePendingPost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  addAlert: PropTypes.func.isRequired,
  history: PropTypes.object,
};

export default connect((state) => {
  return {
    pending: state.pending.data,
  };
}, {
  createPendingPost: pendingActions.create,
  updatePendingPost: pendingActions.update,
  deletePendingPost: pendingActions.destroy,
  createPost: postActions.create,
  addAlert: alertActions.create,
})(CreatePost);
