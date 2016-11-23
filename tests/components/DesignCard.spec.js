import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {Card, CardTitle, CardMedia } from 'material-ui/Card';
import DesignCard from '../../src/components/DesignCard';

chai.should();
chai.use(sinonChai);

describe('<DesignCard />', () => {
  it('should contain <Card />', () => {
    const props = {
      title: 'testTitle',
      imageUrl: 'http://google.com'
    };

    const wrapper = shallow(<DesignCard {...props} />);
    expect(wrapper.find(Card)).to.be.length(1);
  });

  it('should contain <CardMedia />', () => {
    const props = {
      title: 'testTitle',
      imageUrl: 'http://google.com'
    };

    const wrapper = shallow(<DesignCard {...props} />);
    expect(wrapper.find(CardMedia)).to.be.length(1);
  });

  it('should contain <CardTitle />', () => {
    const props = {
      title: 'testTitle',
      imageUrl: 'http://google.com'
    };

    const wrapper = shallow(<DesignCard {...props} />);
    expect(wrapper.find(CardTitle)).to.be.length(1);
  });

  it('should contain <CardTitle /> with title \'testTitle\'', () => {
    const props = {
      title: 'testTitle',
      imageUrl: 'http://google.com'
    };

    const wrapper = shallow(<DesignCard {...props} />);
    const actual = wrapper.find(CardTitle).prop('title');
    const expected = props.title;

    expect(actual).to.equal(expected);
  });

  it('should contain an image', () => {
    const props = {
      title: 'testTitle',
      imageUrl: 'http://google.com'
    };

    const wrapper = shallow(<DesignCard {...props} />);
    expect(wrapper.find('img')).to.be.length(1);
  });

  it('should have an image with url', () => {
    const props = {
      title: 'testTitle',
      imageUrl: 'http://google.com'
    };

    const wrapper = shallow(<DesignCard {...props} />);
    const actual = wrapper.find('img').prop('src');
    const expected = props.imageUrl;

    expect(actual).to.equal(expected);
  });
});
