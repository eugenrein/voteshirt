import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavigationPage from '../components/NavigationPage.js';
import ResultPanel from '../components/ResultPanel.js';
import SearchButton from '../components/SearchButton.js';
import { teal500, white, lightGreen400, redA100 } from 'material-ui/styles/colors';
import { navigateTo } from '../actions/navigationActions.js';
import FontIcon from 'material-ui/FontIcon';

export class FinishVotePage extends Component {
  handleClick() {
    this.props.dispatch(navigateTo(''));
  }

  createColor(likes, dislikes) {
    if (likes >= dislikes) {
      return lightGreen400;
    }
    return redA100;
  }

  createTitle(likes, dislikes) {
    return (
      <div>
        <FontIcon className="material-icons" style={{color: white}}>
          thumb_up
        </FontIcon>
        { likes }
        {' '}
        <FontIcon className="material-icons" style={{color: white}}>
          thumb_down
        </FontIcon>
        { dislikes }
      </div>
    );
  }

  groupedResultPanels() {
    const { searches } = this.props;
    
    const panels = [];
    for (let search in searches) {
      const { likes, dislikes } = searches[search];
      const color = this.createColor(likes.length, dislikes.length);
      const title = this.createTitle(likes.length, dislikes.length);
      panels.push((
        <ResultPanel backgroundColor={color} color={white} title={title} key={search}>
          { search }
        </ResultPanel>
      ));
    }
    return panels;
  }

  createResultPanels() {
    return (
      <div className="result-panels">
        <ResultPanel backgroundColor={teal500} color={white} title={this.props.totalVotes}>
          Designs bewertet
        </ResultPanel>
        { this.groupedResultPanels() }
      </div>
    );
  }

  render() {
    const navigationItems = (
      <div className="button-wrapper">
        <SearchButton 
          onClick={() => this.handleClick()} />
      </div>
    );

    const resultPanels = this.createResultPanels();

    return (
      <NavigationPage name="finish-vote" navigation={navigationItems}>
        { resultPanels }
      </NavigationPage>
    );
  }
}

FinishVotePage.propTypes = {
  dispatch:   PropTypes.func.isRequired,
  searches:   PropTypes.object.isRequired,
  totalVotes: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  const { designsBySearch } = state;
  const { searches }        = designsBySearch;

  let votes = [];
  for (let search in searches) {
    const likes    = searches[search].likes;
    const dislikes = searches[search].dislikes;
    votes = [...votes, ...likes, ...dislikes];
  }
  const uniqueVotes = [...new Set(votes)];

  return {
    searches: searches,
    totalVotes: uniqueVotes.length
  };
}

export default connect(mapStateToProps)(FinishVotePage);
