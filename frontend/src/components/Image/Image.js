/**
 * Image.js
 * Written by: Alex Kasemir
 */
import React, { Component, PropTypes } from 'react';

/**
 * A component for Images
 *
 * @param {} src - Description of src
 * @param {} height - Description of height
 * @param {} width - Description of width
 */
export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    className: ``,
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { className, src, height, width, alt, onClick } = this.props;

    return (
      /* eslint-disable */
      <img
        className={ `Image ${className}` }
        src={ src }
        width={ width }
        alt={ alt }
        height={ height }
        onClick={ onClick || null }
      />
      /* eslint-enable */
    );
  }
}
