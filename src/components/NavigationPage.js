import React, { Component, PropTypes } from 'react';
import Page from './Page.js';
import Navigation from './Navigation.js';

class NavigationPage extends Component {
  render() {
    return (
      <div className="navigation-page-wrapper">
        <div className="navigation-page">
          <Page name={this.props.name}>
            { this.props.children }
          </Page>
          <Navigation>
            { this.props.navigation }
          </Navigation>
        </div>
      </div>
    );
  }
}

NavigationPage.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  navigation: PropTypes.node
};

NavigationPage.defaultProps = {
  name: ''
};

export default NavigationPage;
