import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router';
import { AllVotedPage } from '../../src/containers/AllVotedPage.js';
import NavigationPage from '../../src/components/NavigationPage.js';
import SearchButton from '../../src/components/SearchButton.js';
import FinishButton from '../../src/components/FinishButton.js';

describe('<AllVotedPage />', () => {
  it('should contain <NavigationPage />', () => {
    const dispatch = () => {};
    const wrapper = shallow(<AllVotedPage dispatch={dispatch} />);

    expect(wrapper.find(NavigationPage)).to.be.length(1);
  });

  it('should contain <NavigationPage /> with name \'all-voted\'', () => {
    const dispatch = () => {};
    const wrapper = shallow(<AllVotedPage dispatch={dispatch} />);
    const actual = wrapper.find(NavigationPage).prop('name');
    const expected = 'all-voted';

    expect(actual).to.equal(expected);
  });

  it('should contain SearchButton', () => {
    const dispatch = () => {};
    const wrapper = shallow(<AllVotedPage dispatch={dispatch} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(SearchButton)).to.be.length(1);
  });

  it('should contain FinishButton', () => {
    const dispatch = () => {};
    const wrapper = shallow(<AllVotedPage dispatch={dispatch} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(FinishButton)).to.be.length(1);
  });

  it('should contain two <Link />', () => {
    const dispatch = () => {};
    const wrapper = shallow(<AllVotedPage dispatch={dispatch} />);
    expect(wrapper.find(Link)).to.be.length(2);
  });

  it('should contain <Link /> to \'/\'', () => {
    const dispatch = () => {};
    const wrapper = shallow(<AllVotedPage dispatch={dispatch} />);
    const actual = wrapper.find(Link).at(1).prop('to');
    const expected = '/';

    expect(actual).to.equal(expected);
  });

  it('should contain <Link /> to \'/finish-vote\'', () => {
    const dispatch = () => {};
    const wrapper = shallow(<AllVotedPage dispatch={dispatch} />);
    const actual = wrapper.find(Link).at(0).prop('to');
    const expected = '/finish-vote';

    expect(actual).to.equal(expected);
  });
});
