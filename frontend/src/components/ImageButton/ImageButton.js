/**
 * ImageButton.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FACamera from 'react-icons/lib/fa/camera-retro';
import Button from 'elemental/lib/components/Button';

const IMAGE_WIDTH = 620;
const MAX_SIZE = 1024 * 1000 * 5;
const QUALITY = 0.7; // 70% of original size
const FILE_TYPES = [`image/jpeg`, `image/gif`, `image/png`, `image/bmp`];

export default class ImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  resizeImage = (image, file) => {
    const { updateImage } = this.props;
    const canvas = document.createElement(`canvas`);
    canvas.width = IMAGE_WIDTH;
    canvas.height = image.height * (IMAGE_WIDTH / image.width);
    const ctx = canvas.getContext(`2d`);

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    updateImage({
      fileURI: canvas.toDataURL(file.type, file.size > 5200 ? QUALITY : 1.0),
      fileName: file.name,
      fileType: file.type,
      fileAdded: true,
    });
  }

  handleFile = (e) => {
    const { addAlert, updateImage } = this.props;
    const reader = new FileReader(); // eslint-disable-line
    const file = e.target.files[0]; //eslint-disable-line

    if (file.size > MAX_SIZE) {
      addAlert(`Your file is too large. Please use a file less than 5MB`);
      return;
    }
    if (!FILE_TYPES.includes(file.type)) {
      addAlert(`Sorry, your file type is invalid, only images and gifs`);
      return;
    }

    reader.readAsDataURL(file);
    reader.onloadend = (upload) => {
      // canvas compression doesn`t work with gifs
      if (file.type === `image/gif`) {
        updateImage({
          fileURI: upload.target.result,
          fileName: file.name,
          fileType: file.type,
          fileAdded: true,
        });
      } else {
        const image = new Image(); // eslint-disable-line
        image.src = upload.target.result;
        image.crossOrigin = `Anonymous`;
        image.onload = () => {
          this.resizeImage(image, file);
        };
      }
    };
  }

  render() {
    return (
      <div className="ImageButton">
        <Button className="Button--white ImageButton__button">
          <label
            htmlFor="image_upload"
            className="ImageButton__label"
          >
            <FACamera className="ImageButton__camera" />
            Upload an image...
            <input
              id="image_upload"
              className="image_upload"
              type="file"
              onChange={ this.handleFile }
            />
          </label>
        </Button>
      </div>
    );
  }
}

ImageButton.propTypes = {
  updateImage: PropTypes.func.isRequired,
  addAlert: PropTypes.func.isRequired,
};

