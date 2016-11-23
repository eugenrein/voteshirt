import { expect } from 'chai';
import * as ActionTypes from '../../src/constants/actionTypes';
import reducer from '../../src/reducers/designsBySearchReducer.js';

describe('Reducers::FuelSavings', () => {
  const getInitialState = () => {
    return {
      activeSearch: '',
      searches: {}
    };
  };

  const getAppState = () => {
    return {
      activeSearch: 'test',
      searches: {
        test: {
          activeIndex: 1,
          dislikes: [2],
          isRequesting: false,
          items: [
            {
              id: 1,
              name: 'testDesign1',
              image: 'testDesignImage1'
            },
            {
              id: 2,
              name: 'testDesign1',
              image: 'testDesignImage1'
            },
            {
              id: 3,
              name: 'testDesign3',
              image: 'testDesignImage3'
            }
          ],
          likes: [1]
        }
      }
    };
  };

  const getResponseDesigns = () => {
    return [
      {
        id: 1,
        name: 'testDesign1',
        resources: [{href: 'testDesignImage1'}]
      },
      {
        id: 2,
        name: 'testDesign2',
        resources: [{href: 'testDesignImage2'}]
      },
      {
        id: 3,
        name: 'testDesign3',
        resources: [{href: 'testDesignImage3'}]
      }
    ];
  }

  const getDesigns = () => {
    return [
      {
        id: 1,
        name: 'testDesign1',
        image: 'testDesignImage1'
      },
      {
        id: 2,
        name: 'testDesign2',
        image: 'testDesignImage2'
      },
      {
        id: 3,
        name: 'testDesign3',
        image: 'testDesignImage3'
      }
    ];
  }

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).to.deep.equal(expected);
  });

  it('should handle REQUEST_DESIGNS', () => {
    const action = { 
      type: ActionTypes.REQUEST_DESIGNS,
      search: 'test'
    };
    const expected = getAppState();
    expected.searches.test = Object.assign(expected.searches.test, {isRequesting: true});

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should handle RECEIVE_DESIGNS', () => {
    const designs = getResponseDesigns();
    const action = { 
      type: ActionTypes.RECEIVE_DESIGNS,
      search: 'test2',
      designs
    };
    const expected = Object.assign(getAppState(), {activeSearch: 'test2'});
    expected.searches = Object.assign(expected.searches, {
      ['test2']: {
        activeIndex: 0,
        dislikes: [],
        isRequesting: false,
        items: getDesigns(),
        likes: []
      }
    });
    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should handle LOAD_CACHED_DESIGNS', () => {
    const designs = getResponseDesigns();
    const action = { 
      type: ActionTypes.LOAD_CACHED_DESIGNS,
      search: 'test'
    };
    const expected = Object.assign(getAppState(), {activeSearch: 'test'});
    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should handle LIKE_DESIGN', () => {
    const designs = getResponseDesigns();
    const action = { 
      type: ActionTypes.LIKE_DESIGN,
      designId: 3
    };
    const expected = getAppState();
    expected.searches.test = Object.assign(expected.searches.test, { 
      activeIndex: 2,
      likes: [1, 3]
    });
    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should handle DISLIKE_DESIGN', () => {
    const designs = getResponseDesigns();
    const action = { 
      type: ActionTypes.DISLIKE_DESIGN,
      designId: 3
    };
    const expected = getAppState();
    expected.searches.test = Object.assign(expected.searches.test, { 
      activeIndex: 2,
      dislikes: [2, 3]
    });
    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });
});
