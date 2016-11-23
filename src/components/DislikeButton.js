import React, { Component, PropTypes } from 'react';
import Button from './Button.js';
import { redA100 } from 'material-ui/styles/colors';

class DislikeButton extends Component {
  render() {
    return (
      <Button name="thumb_down" color={redA100} onClick={() => this.props.onClick()} />
    );
  }
}

DislikeButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DislikeButton;