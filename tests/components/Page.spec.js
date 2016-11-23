import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Link } from 'react-router';
import PageContent from '../../src/components/PageContent.js';
import Page from '../../src/components/Page.js';

chai.should();
chai.use(sinonChai);

describe('<Page />', () => {
  it('should contain a div with a page name', () => {
    const props = {
      name: 'test'
    };

    const wrapper = shallow(<Page {...props} />);
    const actual = wrapper.find('div').at(0).prop('className');
    const expected = 'test-page page';

    expect(actual).to.equal(expected);
  });

  it('should contain a div with a className \'content-wrapper\'', () => {
    const props = {
      name: 'test'
    };

    const wrapper = shallow(<Page {...props} />);
    const actual = wrapper.find('div').at(1).prop('className');
    const expected = 'content-wrapper';

    expect(actual).to.equal(expected);
  });

  it('should contain <PageContent />', () => {
    const props = {
      name: 'test'
    };

    const wrapper = shallow(<Page {...props} />);
    expect(wrapper.find(PageContent)).to.be.length(1);
  });
});
