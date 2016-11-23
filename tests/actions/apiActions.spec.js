import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import fetchMock from 'fetch-mock';
import chai, { expect } from 'chai';

import * as ActionTypes from '../../src/constants/actionTypes';
import * as ActionCreators from '../../src/actions/apiActions';
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

  it('should create an action to request designs', () => {
    const search = 'test'
    const dispatch = sinon.spy();
    const expected = {
      type: ActionTypes.REQUEST_DESIGNS,
      search
    };
    const actual = ActionCreators.requestDesigns(search);
    expect(typeof(ActionCreators.requestDesigns(search))).to.equal('function');
    ActionCreators.requestDesigns(search)(dispatch, getInitState);
    expect(dispatch).to.have.been.calledWith(expected);
  });

  it('should create an action to receive designs', () => {
    const search = 'test'
    const dispatch = sinon.spy();
    const expected = {
      type: ActionTypes.RECEIVE_DESIGNS,
      designs: API_TEST_RESPONSE.designs,
      search
    };
    const actual = ActionCreators.requestDesigns(search);
    expect(typeof(ActionCreators.requestDesigns(search))).to.equal('function');
    return ActionCreators.requestDesigns(search)(dispatch, getInitState)
      .then(() => expect(dispatch).to.have.been.calledWith(expected));
  });
});
