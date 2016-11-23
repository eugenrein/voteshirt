import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Link } from 'react-router';
import Page from '../../src/components/Page.js';
import NotFoundPage from '../../src/components/NotFoundPage.js';

chai.should();
chai.use(sinonChai);

describe('<NotFoundPage />', () => {
  it('should contain a <Page />', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find(Page)).to.be.length(1);
  });

  it('should contain <Page /> with name \'not-found\'', () => {
    const wrapper = shallow(<NotFoundPage />);
    const actual = wrapper.find(Page).prop('name');
    const expected = 'not-found';

    expect(actual).to.equal(expected);
  });

  it('should contain a h4', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find('h4')).to.be.length(1);
  });

  it('should contain <Link />', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find(Link)).to.be.length(1);
  });

  it('should contain <Link /> to \'/\'', () => {
    const wrapper = shallow(<NotFoundPage />);
    const actual = wrapper.find(Link).prop('to');
    const expected = '/';

    expect(actual).to.equal(expected);
  });
});
