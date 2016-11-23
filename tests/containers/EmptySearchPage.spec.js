import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router';
import { EmptySearchPage } from '../../src/containers/EmptySearchPage.js';
import NavigationPage from '../../src/components/NavigationPage.js';
import SearchButton from '../../src/components/SearchButton.js';

describe('<EmptySearchPage />', () => {
  it('should contain <NavigationPage />', () => {
    const dispatch = () => {};
    const wrapper = shallow(<EmptySearchPage dispatch={dispatch} />);

    expect(wrapper.find(NavigationPage)).to.be.length(1);
  });

  it('should contain <NavigationPage /> with name \'empty-search\'', () => {
    const dispatch = () => {};
    const wrapper = shallow(<EmptySearchPage dispatch={dispatch} />);
    const actual = wrapper.find(NavigationPage).prop('name');
    const expected = 'empty-search';

    expect(actual).to.equal(expected);
  });

  it('should contain SearchButton', () => {
    const dispatch = () => {};
    const wrapper = shallow(<EmptySearchPage dispatch={dispatch} />);
    const navigation = wrapper.find(NavigationPage).prop('navigation');
    const navigationItems = shallow(navigation);

    expect(navigationItems.find(SearchButton)).to.be.length(1);
  });

  it('should contain <Link />', () => {
    const dispatch = () => {};
    const wrapper = shallow(<EmptySearchPage dispatch={dispatch} />);
    expect(wrapper.find(Link)).to.be.length(1);
  });

  it('should contain <Link /> to \'/\'', () => {
    const dispatch = () => {};
    const wrapper = shallow(<EmptySearchPage dispatch={dispatch} />);
    const actual = wrapper.find(Link).prop('to');
    const expected = '/';

    expect(actual).to.equal(expected);
  });
});
