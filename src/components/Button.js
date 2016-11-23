import React, { Component, PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import { white, black } from 'material-ui/styles/colors';

class Button extends Component {
  render() {
    const style = { color: this.props.color };

    return (
      <FloatingActionButton 
        zDepth={1} 
        mini={true}
        backgroundColor={this.props.backgroundColor}
        className="button"
        onClick={() => this.props.onClick()}>
        <FontIcon className="material-icons" style={style}>
          { this.props.name }
        </FontIcon>
      </FloatingActionButton>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
};

Button.defaultProps = {
  color: black,
  backgroundColor: white
};

export default Button;