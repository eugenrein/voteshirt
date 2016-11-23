import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Link } from 'react-router';
import { SearchPage } from '../../src/containers/SearchPage.js';
import Page from '../../src/components/Page.js';
import SearchForm from '../../src/components/SearchForm.js';

describe('<SearchPage />', () => {
  it('should contain <Page />', () => {
    const props = {
      dispatch: () => {}
    };
    const wrapper = shallow(<SearchPage {...props} />);

    expect(wrapper.find(Page)).to.be.length(1);
  });

  it('should contain <Page /> with name \'search\'', () => {
    const props = {
      dispatch: () => {}
    };
    const wrapper = shallow(<SearchPage {...props} />);
    const actual = wrapper.find(Page).prop('name');
    const expected = 'search';

    expect(actual).to.equal(expected);
  });

  it('should contain <SearchForm />', () => {
    const props = {
      dispatch: () => {}
    };
    const wrapper = shallow(<SearchPage {...props} />);
    expect(wrapper.find(SearchForm)).to.be.length(1);
  });
});
