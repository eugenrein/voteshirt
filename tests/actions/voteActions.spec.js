import * as ActionTypes from '../../src/constants/actionTypes';
import * as ActionCreators from '../../src/actions/voteActions';

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

  it('should create an action to load like designs', () => {
    const dispatch = sinon.spy();
    const designId = 1;
    const expected = {
      type: ActionTypes.LIKE_DESIGN,
      designId
    };
    const actual = ActionCreators.likeDesignWithNavigation(designId);
    expect(typeof(ActionCreators.likeDesignWithNavigation(designId))).to.equal('function');
    ActionCreators.likeDesignWithNavigation(designId)(dispatch, () => appState);
    expect(dispatch).to.have.been.calledWith(expected);
  });

  it('should create an action to load dislike designs', () => {
    const dispatch = sinon.spy();
    const designId = 1;
    const expected = {
      type: ActionTypes.DISLIKE_DESIGN,
      designId
    };
    const actual = ActionCreators.dislikeDesignWithNavigation(designId);
    expect(typeof(ActionCreators.dislikeDesignWithNavigation(designId))).to.equal('function');
    ActionCreators.dislikeDesignWithNavigation(designId)(dispatch, () => appState);
    expect(dispatch).to.have.been.calledWith(expected);
  });
});
