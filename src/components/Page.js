import React, { Component, PropTypes } from 'react';
import PageContent from './PageContent.js';

class Page extends Component {
  pageName() {
    const { name } = this.props;
    if (name !== '') {
      return `${name}-page page`;
    }
    return 'page';
  }

  render() {
    return (
      <div className={this.pageName()}>
        <div className="content-wrapper">
          <PageContent>
            { this.props.children }
          </PageContent>
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string
};

Page.defaultProps = {
  name: ''
};

export default Page;
