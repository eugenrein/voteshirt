import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavigationPage from '../components/NavigationPage.js';
import DesignCard from '../components/DesignCard.js';
import SearchButton from '../components/SearchButton.js';
import LikeButton from '../components/LikeButton.js';
import DislikeButton from '../components/DislikeButton.js';
import FinishButton from '../components/FinishButton.js';
import { navigateTo } from '../actions/navigationActions.js';
import { likeDesignWithNavigation, dislikeDesignWithNavigation } from '../actions/voteActions.js';

export class VotePage extends Component {
  handleClick(button, designId = 0) {
    const { dispatch } = this.props;

    switch(button) {
      case 'search':
        dispatch(navigateTo(''));
        break;
      case 'like':
        dispatch(likeDesignWithNavigation(designId));
        break;
      case 'dislike':
        dispatch(dislikeDesignWithNavigation(designId));
        break;
      case 'finish':
        dispatch(navigateTo('finish-vote'));
        break;
    }
  }

  createSearchNavigationItem() {
    return (
      <div className="button-wrapper">
        <SearchButton 
          onClick={() => this.handleClick('search')} />
      </div>
    );
  }

  createNavigationItems(designId) {
    return (
      <div className="button-wrapper">
        <SearchButton 
          onClick={() => this.handleClick('search')} />
        <LikeButton 
          onClick={() => this.handleClick('like', designId)} />
        <DislikeButton 
          onClick={() => this.handleClick('dislike', designId)} />
        <FinishButton 
          onClick={() => this.handleClick('finish')} />
      </div>
    );
  }

  render() {
    const { design } = this.props;
    const searchNavigationItem = this.createSearchNavigationItem();
    if (!design || design === null) {
      return (
        <NavigationPage name="vote" navigation={searchNavigationItem}>
          <div className="text-center">No designs loaded</div>
        </NavigationPage>
      );
    }

    const navigationItems = this.createNavigationItems(design.id);
    return (
      <NavigationPage name="vote" navigation={navigationItems}>
        <DesignCard title={design.name} imageUrl={design.image} />
      </NavigationPage>
    );
  }
}

VotePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  design: PropTypes.object  
};

function mapStateToProps(state) {
  const { designsBySearch }        = state;
  const { activeSearch, searches } = designsBySearch;

  if (searches[activeSearch]) {
    const { items, activeIndex } = searches[activeSearch];
    return {
      design: items[activeIndex]
    };
  }

  return {
    design: null
  };
}

export default connect(mapStateToProps)(VotePage);
