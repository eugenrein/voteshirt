import React, { Component, PropTypes } from 'react';
import Button from './Button.js';
import { lightBlue700 } from 'material-ui/styles/colors';


class SearchButton extends Component {
  render() {
    return (
      <Button name="search" color={lightBlue700} onClick={() => this.props.onClick()} />
    );
  }
}

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SearchButton;