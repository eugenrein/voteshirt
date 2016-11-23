import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import { createStore } from 'redux';

import { API_TEST_RESPONSE } from '../constants/api';
import * as ActionTypes from '../../src/constants/actionTypes';

import initialState from '../../src/reducers/initialState';
import rootReducer from '../../src/reducers';

describe('Store', () => {
  before(() => fetchMock.get('*', API_TEST_RESPONSE));
  after(() => fetchMock.restore());

  const getAppState = () => {
    return {
      designsBySearch: {
        activeSearch: 'test',
        searches: {
          test: {
            activeIndex: 0,
            isRequesting: false,
            dislikes: [],
            items: [
              {
                id: '13562480',
                name: 'Crash Test Dummy Symbol',
                image: 'http://image.spreadshirtmedia.net/image-server/v1/designs/13562480'
              },
              {
                id: '15733414',
                name: 'laboratory equipment ',
                image: 'http://image.spreadshirtmedia.net/image-server/v1/designs/15733414'
              },
              {
                id: '14382829',
                name: 'Eye Test',
                image: 'http://image.spreadshirtmedia.net/image-server/v1/designs/14382829'
              }
            ],
            likes: [],
          }
        }
      }
    }
  }

  it('should display designs when searched', () => {
    const store = createStore(rootReducer, initialState);
    const search = 'test';
    const actions = [
      { type: ActionTypes.REQUEST_DESIGNS, search },
      { type: ActionTypes.RECEIVE_DESIGNS, search, designs: API_TEST_RESPONSE.designs }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = getAppState();

    expect(actual.designsBySearch).to.deep.equal(expected.designsBySearch);
  });

  it('should be possible to like and dislike designs after search', () => {
    const store = createStore(rootReducer, initialState);
    const search = 'test';
    const likeId = 13562480;
    const dislikeId = 15733414;
    const actions = [
      { type: ActionTypes.REQUEST_DESIGNS, search },
      { type: ActionTypes.RECEIVE_DESIGNS, search, designs: API_TEST_RESPONSE.designs },
      { type: ActionTypes.LIKE_DESIGN, designId: likeId },
      { type: ActionTypes.DISLIKE_DESIGN, designId: dislikeId }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = getAppState();
    expected.designsBySearch.searches.test = Object.assign(expected.designsBySearch.searches.test, {
      activeIndex: 2,
      dislikes: [dislikeId],
      likes: [likeId],
    });

    expect(actual.designsBySearch).to.deep.equal(expected.designsBySearch);
  });

  it('should handle many actions', () => {
    const store = createStore(rootReducer, initialState);
    const search = 'test';
    const likeId = 13562480;
    const dislikeId = 15733414;
    const cachedLikeId = 14382829;
    const actions = [
      { type: ActionTypes.REQUEST_DESIGNS, search },
      { type: ActionTypes.RECEIVE_DESIGNS, search, designs: API_TEST_RESPONSE.designs },
      { type: ActionTypes.REQUEST_DESIGNS, search },
      { type: ActionTypes.RECEIVE_DESIGNS, search, designs: API_TEST_RESPONSE.designs },
      { type: ActionTypes.LIKE_DESIGN, designId: likeId },
      { type: ActionTypes.DISLIKE_DESIGN, designId: dislikeId },
      { type: ActionTypes.LOAD_CACHED_DESIGNS, search },
      { type: ActionTypes.LIKE_DESIGN, designId: cachedLikeId },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = getAppState();
    expected.designsBySearch.searches.test = Object.assign(expected.designsBySearch.searches.test, {
      activeIndex: 3,
      dislikes: [dislikeId],
      likes: [likeId, cachedLikeId],
    });

    expect(actual.designsBySearch).to.deep.equal(expected.designsBySearch);
  });
});
