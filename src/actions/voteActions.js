import { navigateTo } from './navigationActions';
import { LIKE_DESIGN, DISLIKE_DESIGN } from '../constants/actionTypes';

function shouldNavigateToAllVoted(state) {  
  const { activeSearch, searches } = state.designsBySearch;
  const designs = searches[activeSearch];

  return (designs.activeIndex >= designs.items.length - 1);
}

function likeDesign(designId) {
  return {
    type: LIKE_DESIGN,
    designId
  };
}

function dislikeDesign(designId) {
  return {
    type: DISLIKE_DESIGN,
    designId
  };
}

export function likeDesignWithNavigation(designId) {
  return (dispatch, getState) => {
    if (shouldNavigateToAllVoted(getState())) {
      dispatch(navigateTo('all-voted'));
    }
    return dispatch(likeDesign(designId));
  };
}

export function dislikeDesignWithNavigation(designId) {
  return (dispatch, getState) => {
    if (shouldNavigateToAllVoted(getState())) {
      dispatch(navigateTo('all-voted'));
    }
    return dispatch(dislikeDesign(designId));
  };
}