import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavigationPage from '../components/NavigationPage.js';
import SearchButton from '../components/SearchButton.js';
import FinishButton from '../components/FinishButton.js';
import { navigateTo } from '../actions/navigationActions.js';

export class AllVotedPage extends Component {
  handleClick(button) {
    const { dispatch } = this.props;
    
    switch(button) {
      case 'search':
        dispatch(navigateTo(''));
        break;
      case 'finish':
        dispatch(navigateTo('finish-vote'));
        break;
    }
  }

  render() {
    const navigationItems = (
      <div className="button-wrapper">
        <SearchButton 
          onClick={() => this.handleClick('search')} />
        <FinishButton 
          onClick={() => this.handleClick('finish')} />
      </div>
    );

    return (
      <NavigationPage name="all-voted" navigation={navigationItems}>
        <p>
          Du hast über alle Designs abgestimmt!
        </p>
        <p>
          <Link to="/finish-vote">Beende das Voting</Link>, oder starte eine 
          {' '}
          <Link to="/">neue Suche</Link> um weiter abstimmen zu können.
        </p>
      </NavigationPage>
    );
  }
}

AllVotedPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AllVotedPage);
