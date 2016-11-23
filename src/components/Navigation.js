import React, { Component, PropTypes } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        { this.props.children }
      </div>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.node
};

export default Navigation;