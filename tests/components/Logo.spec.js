import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Link } from 'react-router';
import Logo from '../../src/components/Logo';

chai.should();
chai.use(sinonChai);

describe('<Logo />', () => {
  it('should contain div with className \'logo\'', () => {
    const props = {
      linkTo: 'http://google.com'
    };

    const wrapper = shallow(<Logo {...props} />);
    const actual = wrapper.find('div').prop('className');
    const expected = 'logo'

    expect(actual).to.equal(expected);
  });

  it('should contain <Link />', () => {
    const props = {
      linkTo: 'http://google.com'
    };

    const wrapper = shallow(<Logo {...props} />);
    expect(wrapper.find(Link)).to.be.length(1);
  });

  it('should contain <Link /> with specified url', () => {
    const props = {
      linkTo: 'http://google.com'
    };

    const wrapper = shallow(<Logo {...props} />);
    const actual = wrapper.find(Link).prop('to');
    const expected = props.linkTo;

    expect(actual).to.equal(expected);
  });

  it('should contain an image', () => {
    const props = {
      linkTo: 'http://google.com'
    };

    const wrapper = shallow(<Logo {...props} />);
    expect(wrapper.find('img')).to.be.length(1);
  });
});
