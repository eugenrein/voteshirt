import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { white, black } from 'material-ui/styles/colors';
import Button from '../../src/components/Button';

chai.should();
chai.use(sinonChai);

describe('<Button />', () => {
  it('should contain <FloatingActionButton />', () => {
    const props = {
      name: 'testName',
      onClick: sinon.spy(),
      color: white,
      backgroundColor: black
    };

    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find(FloatingActionButton)).to.be.length(1);
  });

  it('should handle click', () => {
    const props = {
      name: 'testName',
      onClick: sinon.spy(),
      color: white,
      backgroundColor: black
    };

    const wrapper = shallow(<Button {...props} />);
    props.onClick.should.not.have.been.called;
    wrapper.simulate('click');
    expect(props.onClick).to.have.been.called;
  });
});
