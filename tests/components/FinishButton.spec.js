import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Button from '../../src/components/Button';
import FinishButton from '../../src/components/FinishButton';

chai.should();
chai.use(sinonChai);

describe('<FinishButton />', () => {
  it('should contain <Button />', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<FinishButton {...props} />);
    expect(wrapper.find(Button)).to.be.length(1);
  });

  it('should handle click', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<FinishButton {...props} />);
    props.onClick.should.not.have.been.called;
    wrapper.simulate('click');
    expect(props.onClick).to.have.been.called;
  });

  it('should have a <Button /> with name \'exit_to_app\'', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<FinishButton {...props} />);
    const actual = wrapper.find(Button).prop('name');
    const expected = 'exit_to_app';

    expect(actual).to.equal(expected);
  });
});
