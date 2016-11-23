import { LOAD_CACHED_DESIGNS } from '../constants/actionTypes';
import { trim } from 'lodash';
import { requestDesigns } from './apiActions';
import { navigateTo } from './navigationActions';

export function loadCachedDesigns(search) {
  return {
    type: LOAD_CACHED_DESIGNS,
    search: search
  };
}

function shouldRequestDesigns(state, search) {  
  const designs = state.designsBySearch.searches[search];
  if (trim(search).length > 0 && !designs) {
    return true;
  }

  return false;
}

function shouldLoadCachedDesigns(state, search) {
  const designs = state.designsBySearch.searches[search];
  if (!trim(search) || !designs || designs.isRequesting) {
    return false;
  }
  return true;
}

export function submitSearch(search) {
  return (dispatch, getState) => {
    if (shouldRequestDesigns(getState(), search)) {
      return dispatch(requestDesigns(search));
    } else if (shouldLoadCachedDesigns(getState(), search)) {
      const designs = getState().designsBySearch.searches[search];

      if (designs.activeIndex >= designs.items.length - 1) {
        dispatch(navigateTo('all-voted'));
      } else if (designs.items.length > 0) {
        dispatch(navigateTo('vote'));
      } else {
        dispatch(navigateTo('empty-search'));
      }

      return dispatch(loadCachedDesigns(search));
    }
  };
}