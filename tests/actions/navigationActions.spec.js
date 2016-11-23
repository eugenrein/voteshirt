import * as ActionTypes from 'react-router-redux';
import * as ActionCreators from '../../src/actions/navigationActions';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

describe('Actions', () => {
  const appState = {
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
  };

  it('should create an action to handle navigation', () => {
    const dispatch = sinon.spy();
    const page = 'vote'
    const expected = {
      type: ActionTypes.CALL_HISTORY_METHOD,
      payload: { 
        args: [`/${page}`], method: "push"
      }
    };
    const actual = ActionCreators.navigateTo(page);
    expect(typeof(ActionCreators.navigateTo(page))).to.equal('function');
    ActionCreators.navigateTo(page)(dispatch);
    expect(dispatch).to.have.been.calledWith(expected);
  });
});
