/**
 * Alert.js
 * Written by: Alex Kasemir
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  padding: .75em  1em;
  margin-bottom: 1em;
  border: 1px solid transparent;
  border-radius: 0.3em;
  background-color: rgba(214, 66, 66, 0.1);
  border-color: rgba(214, 66, 66, 0.05);
  color: #d64242;
`;


export default class Alert extends Component {
  render() {
    return (
      <AlertContainer>
        { this.props.children }
      </AlertContainer>
    );
  }
}
