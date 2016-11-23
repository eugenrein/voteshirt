import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from '../components/Page.js';
import SearchForm from '../components/SearchForm.js';
import { submitSearch } from '../actions/formActions.js';

export class SearchPage extends Component {
  handleSubmit(search) {
    this.props.dispatch(submitSearch(search));
  }

  render() {
    return (
      <Page name="search">
        <SearchForm 
          onSubmit={(search) => this.handleSubmit(search)} />
      </Page>
    );
  }
}

SearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SearchPage);
