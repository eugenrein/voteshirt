import React, { Component, PropTypes } from 'react';
import Button from './Button.js';
import { lightGreen400 } from 'material-ui/styles/colors';

class LikeButton extends Component {
  render() {
    return (
      <Button name="thumb_up" color={lightGreen400} onClick={() => this.props.onClick()} />
    );
  }
}

LikeButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LikeButton;