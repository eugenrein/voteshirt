import React, { Component, PropTypes } from 'react';
import Button from './Button.js';
import { yellow600 } from 'material-ui/styles/colors';

class FinishButton extends Component {
  render() {
    return (
      <Button name="exit_to_app" color={yellow600} onClick={() => this.props.onClick()} />
    );
  }
}

FinishButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default FinishButton;