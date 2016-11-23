import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Button from '../../src/components/Button';
import DislikeButton from '../../src/components/DislikeButton';

chai.should();
chai.use(sinonChai);

describe('<DislikeButton />', () => {
  it('should contain <Button />', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<DislikeButton {...props} />);
    expect(wrapper.find(Button)).to.be.length(1);
  });

  it('should handle click', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<DislikeButton {...props} />);
    props.onClick.should.not.have.been.called;
    wrapper.simulate('click');
    expect(props.onClick).to.have.been.called;
  });

  it('should have a <Button /> with name \'thumb_down\'', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<DislikeButton {...props} />);
    const actual = wrapper.find(Button).prop('name');
    const expected = 'thumb_down';

    expect(actual).to.equal(expected);
  });
});
