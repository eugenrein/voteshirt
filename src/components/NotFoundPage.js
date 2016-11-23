import React, { Component } from 'react';
import { Link } from 'react-router';
import Page from './Page.js';

class NotFoundPage extends Component {
  render() {
    return (
      <Page name="not-found">
        <h4>404 Page Not Found</h4>
        <Link to="/">Go back to search</Link>
      </Page>
    );
  }
}

export default NotFoundPage;
