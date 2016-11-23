import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Link } from 'react-router';
import PageContent from '../../src/components/PageContent.js';

chai.should();
chai.use(sinonChai);

describe('<PageContent />', () => {
  it('should contain a div with a className \'content\'', () => {
    const wrapper = shallow(<PageContent />);
    const actual = wrapper.find('div').prop('className');
    const expected = 'content';

    expect(actual).to.equal(expected);
  });
});
