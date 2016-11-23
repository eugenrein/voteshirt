import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavigationPage from '../components/NavigationPage.js';
import SearchButton from '../components/SearchButton.js';
import { navigateTo } from '../actions/navigationActions.js';

export class EmptySearchPage extends Component {
  handleClick() {
    this.props.dispatch(navigateTo(''));
  }

  render() {
    const navigationItems = (
      <div className="button-wrapper">
        <SearchButton 
          onClick={() => this.handleClick()} />
      </div>
    );

    return (
      <NavigationPage name="empty-search" navigation={navigationItems}>
        <p>
          Für deine Suche konnten leider keine Designs gefunden werden.
        </p>
        <p>
          Starte eine <Link to="/">neue Suche</Link> um neue Designs zu finden.
        </p>
      </NavigationPage>
    );
  }
}

EmptySearchPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(EmptySearchPage);
