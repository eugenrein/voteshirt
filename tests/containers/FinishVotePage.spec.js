import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router';
import { FinishVotePage } from '../../src/containers/FinishVotePage.js';
import NavigationPage from '../../src/components/NavigationPage.js';
import ResultPanel from '../../src/components/ResultPanel.js';
import SearchButton from '../../src/components/SearchButton.js';
import { teal500, lightGreen400, redA100 } from 'material-ui/styles/colors';

describe('<FinishVotePage />', () => {
  it('should contain <NavigationPage />', () => {
    const props = {
      dispatch: () => {},
      searches: {
        test: {
          isRequesting: false,
          likes: [1, 2, 3],
          dislikes: [4, 5, 6],
          items: [],
          activeIndex: 0
        }
      },
      totalVotes: 6
    };
    const wrapper = shallow(<FinishVotePage {...props} />);

    expect(wrapper.find(NavigationPage)).to.be.length(1);
  });

  it('should contain <NavigationPage /> with name \'finish-vote\'', () => {
    const props = {
      dispatch: () => {},
      searches: {
        test: {
          isRequesting: false,
          likes: [1, 2, 3],
          dislikes: [4, 5, 6],
          items: [],
          activeIndex: 0
        }
      },
      totalVotes: 6
    };
    const wrapper = shallow(<FinishVotePage {...props} />);
    const actual = wrapper.find(NavigationPage).prop('name');
    const expected = 'finish-vote';

    expect(actual).to.equal(expected);
  });

  it('should contain <SearchButton />', () => {
    const props = {
      dispatch: () => {},
      searches: {
        test: {
          isRequesting: false,
          likes: [1, 2, 3],
          dislikes: [4, 5, 6],
          items: [],
          activeIndex: 0
        }
      },
      totalVotes: 6
    };
    const wrapper = shallow(<FinishVotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(SearchButton)).to.be.length(1);
  });

  it('should contain two <ResultPanel />', () => {
    const props = {
      dispatch: () => {},
      searches: {
        test: {
          isRequesting: false,
          likes: [1, 2, 3],
          dislikes: [4, 5, 6],
          items: [],
          activeIndex: 0
        }
      },
      totalVotes: 6
    };
    const wrapper = shallow(<FinishVotePage {...props} />);

    expect(wrapper.find(ResultPanel)).to.be.length(2);
  });

  it('should contain <ResultPanel /> with teal500 background color', () => {
    const props = {
      dispatch: () => {},
      searches: {
        test: {
          isRequesting: false,
          likes: [1, 2, 3],
          dislikes: [4, 5, 6],
          items: [],
          activeIndex: 0
        }
      },
      totalVotes: 6
    };
    const wrapper = shallow(<FinishVotePage {...props} />);
    const actual = wrapper.find(ResultPanel).at(0).prop('backgroundColor');
    const expected = teal500;
    expect(actual).to.equal(expected);
  });

  it('should contain <ResultPanel /> with lightGreen400 background color', () => {
    const props = {
      dispatch: () => {},
      searches: {
        test: {
          isRequesting: false,
          likes: [1, 2, 3],
          dislikes: [4, 5],
          items: [],
          activeIndex: 0
        }
      },
      totalVotes: 5
    };
    const wrapper = shallow(<FinishVotePage {...props} />);
    const actual = wrapper.find(ResultPanel).at(1).prop('backgroundColor');
    const expected = lightGreen400;
    expect(actual).to.equal(expected);
  });

  it('should contain <ResultPanel /> with redA100 background color', () => {
    const props = {
      dispatch: () => {},
      searches: {
        test: {
          isRequesting: false,
          likes: [1, 2],
          dislikes: [4, 5, 6],
          items: [],
          activeIndex: 0
        }
      },
      totalVotes: 5
    };
    const wrapper = shallow(<FinishVotePage {...props} />);
    const actual = wrapper.find(ResultPanel).at(1).prop('backgroundColor');
    const expected = redA100;
    expect(actual).to.equal(expected);
  });

  it('should contain <ResultPanel /> with 5 total votes', () => {
    const props = {
      dispatch: () => {},
      searches: {
        test: {
          isRequesting: false,
          likes: [1, 2],
          dislikes: [4, 5, 6],
          items: [],
          activeIndex: 0
        }
      },
      totalVotes: 5
    };
    const wrapper = shallow(<FinishVotePage {...props} />);
    const actual = wrapper.find(ResultPanel).at(0).prop('title');
    const expected = props.totalVotes;
    expect(actual).to.equal(expected);
  });
});
