import React, { Component, PropTypes } from 'react';

class PageContent extends Component {
  render() {
    return (
      <div className="content">
        { this.props.children }
      </div>
    );
  }
}

PageContent.propTypes = {
  children: PropTypes.node
};

export default PageContent;
