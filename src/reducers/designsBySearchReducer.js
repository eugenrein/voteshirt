import initialState, { search } from './initialState';
import { REQUEST_DESIGNS, 
         RECEIVE_DESIGNS, 
         LOAD_CACHED_DESIGNS,
         LIKE_DESIGN,
         DISLIKE_DESIGN } from '../constants/actionTypes.js';

function designs(state = search, action) {
  const uniqueLikes = new Set([...state.likes, action.designId]);
  const uniqueDislikes = new Set([...state.dislikes, action.designId]);

  switch(action.type) {
    case REQUEST_DESIGNS:
      return Object.assign({}, state, {
        isRequesting: true
      });
    case RECEIVE_DESIGNS:
      return Object.assign({}, state, { 
        isRequesting: false,
        items: action.designs.map(design => ({ 
          id: design.id,
          name: design.name,
          image: design.resources[0].href
        }))
      });
    case LIKE_DESIGN:
      return Object.assign({}, state, {
        likes: [...uniqueLikes],
        activeIndex: state.activeIndex + 1
      });
    case DISLIKE_DESIGN:
      return Object.assign({}, state, {
        dislikes: [...uniqueDislikes],
        activeIndex: state.activeIndex + 1
      });
    default:
      return state;
  }
}

export default function designsBySearch(state = initialState.designsBySearch, action) {
  const { activeSearch, searches } = state; 
  switch(action.type) {
    case REQUEST_DESIGNS:
    case RECEIVE_DESIGNS:
    case LOAD_CACHED_DESIGNS:
      return Object.assign({}, state, {
        activeSearch: action.search,
        searches: Object.assign({}, searches, {
          [action.search]: designs(searches[action.search], action)
        })
      });
    case LIKE_DESIGN:
    case DISLIKE_DESIGN:
      return Object.assign({}, state, {
        searches: Object.assign({}, searches, {
          [activeSearch]: designs(searches[activeSearch], action)
        })
      });
    default:
      return state;
  }
}