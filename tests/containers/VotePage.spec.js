import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router';
import { VotePage } from '../../src/containers/VotePage.js';
import NavigationPage from '../../src/components/NavigationPage.js';
import DesignCard from '../../src/components/DesignCard.js';
import SearchButton from '../../src/components/SearchButton.js';
import LikeButton from '../../src/components/LikeButton.js';
import DislikeButton from '../../src/components/DislikeButton.js';
import FinishButton from '../../src/components/FinishButton.js';

describe('<VotePage />', () => {
  it('should contain <NavigationPage />', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);

    expect(wrapper.find(NavigationPage)).to.be.length(1);
  });

  it('should contain <NavigationPage /> with name \'vote\'', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);
    const actual = wrapper.find(NavigationPage).prop('name');
    const expected = 'vote';

    expect(actual).to.equal(expected);
  });

  it('should contain <SearchButton />', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(SearchButton)).to.be.length(1);
  });

  it('should contain <LikeButton />', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(LikeButton)).to.be.length(1);
  });

  it('should contain <DislikeButton />', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(DislikeButton)).to.be.length(1);
  });

  it('should contain <FinishButton />', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(FinishButton)).to.be.length(1);
  });

  it('should contain <DesignCard />', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);

    expect(wrapper.find(DesignCard)).to.be.length(1);
  });

  it('should contain <DesignCard /> with name', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);
    const actual = wrapper.find(DesignCard).prop('title');
    const expected = props.design.name;

    expect(actual).to.equal(expected);
  });

  it('should contain <DesignCard /> with imageUrl', () => {
    const props = {
      dispatch: () => {},
      design: {
        id: 1,
        name: 'test',
        image: 'http://google.com'
      }
    };
    const wrapper = shallow(<VotePage {...props} />);
    const actual = wrapper.find(DesignCard).prop('imageUrl');
    const expected = props.design.image;

    expect(actual).to.equal(expected);
  });

  it('should not contain <DesignCard /> without data', () => {
    const props = {
      dispatch: () => {},
      design: null
    };
    const wrapper = shallow(<VotePage {...props} />);
    expect(wrapper.find(DesignCard)).to.be.length(0);
  });

  it('should contain <SearchButton /> if no data specified', () => {
    const props = {
      dispatch: () => {},
      design: null
    };
    const wrapper = shallow(<VotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(SearchButton)).to.be.length(1);
  });

  it('should not contain <LikeButton /> if no data specified', () => {
    const props = {
      dispatch: () => {},
      design: null
    };
    const wrapper = shallow(<VotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(LikeButton)).to.be.length(0);
  });

  it('should not contain <DislikeButton /> if no data specified', () => {
    const props = {
      dispatch: () => {},
      design: null
    };
    const wrapper = shallow(<VotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(DislikeButton)).to.be.length(0);
  });

  it('should not contain <FinishButton /> if no data specified', () => {
    const props = {
      dispatch: () => {},
      design: null
    };
    const wrapper = shallow(<VotePage {...props} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(FinishButton)).to.be.length(0);
  });
});
