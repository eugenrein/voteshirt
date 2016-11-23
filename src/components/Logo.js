import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const image = require('../assets/images/logo2.png');

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Link to={this.props.linkTo}>
          <img src={image} />
        </Link>
      </div>
    );
  }
}

Logo.propTypes = {
  linkTo: PropTypes.string
};

export default Logo;