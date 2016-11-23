import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Navigation from '../../src/components/Navigation';

chai.should();
chai.use(sinonChai);

describe('<Navigation />', () => {
  it('should contain div with className \'navigation\'', () => {
    const wrapper = shallow(<Navigation />);
    const actual = wrapper.find('div').prop('className');
    const expected = 'navigation'

    expect(actual).to.equal(expected);
  });
});
