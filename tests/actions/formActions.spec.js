import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fetchMock from 'fetch-mock';
import chai, { expect } from 'chai';

import * as ActionTypes from '../../src/constants/actionTypes';
import * as ActionCreators from '../../src/actions/formActions';
import { API_TEST_RESPONSE } from '../constants/api';

chai.use(sinonChai);

describe('Actions', () => {
  before(() => fetchMock.get('*', API_TEST_RESPONSE));
  after(() => fetchMock.restore());

  const getInitState = () => {
    return {
      designsBySearch: {
        activeSearch: '',
        searches: []
      }
    }
  }

  const getAppState = () => {
    return {
      designsBySearch: {
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
      }
    }
  };

  it('should create an action to load cached designs', () => {
    const dispatch = sinon.spy();
    const search = 'test'
    const expected = {
      type: ActionTypes.LOAD_CACHED_DESIGNS,
      search: search
    };
    const actual = ActionCreators.submitSearch(search);
    expect(typeof(ActionCreators.submitSearch(search))).to.equal('function');
    ActionCreators.submitSearch(search)(dispatch, getAppState);
    expect(dispatch).to.have.been.calledWith(expected);
  });
});
