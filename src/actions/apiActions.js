import 'isomorphic-fetch';
import { API_URL } from '../constants/api';
import { REQUEST_DESIGNS, RECEIVE_DESIGNS } from '../constants/actionTypes';
import { navigateTo } from './navigationActions';

export function startDesignRequest(search) {
  return {
    type: REQUEST_DESIGNS,
    search: search
  };
}

export function finishDesignRequest(search, designs) {
  return {
    type: RECEIVE_DESIGNS,
    search: search,
    designs: designs.designs
  };
}

export function requestDesigns(search) {
  return (dispatch) => {
    dispatch(startDesignRequest(search));
    return fetch(API_URL + search)
      .then((response) => response.json())
      .then((parsedResponse) => {
        if (parsedResponse.designs.length > 0) {
          dispatch(navigateTo('vote'));
        } else {
          dispatch(navigateTo('empty-search'));
        }

        return dispatch(finishDesignRequest(search, parsedResponse));
      });
  };
}