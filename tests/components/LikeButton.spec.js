import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Button from '../../src/components/Button';
import LikeButton from '../../src/components/LikeButton';

chai.should();
chai.use(sinonChai);

describe('<LikeButton />', () => {
  it('should contain <Button />', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<LikeButton {...props} />);
    expect(wrapper.find(Button)).to.be.length(1);
  });

  it('should handle click', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<LikeButton {...props} />);
    props.onClick.should.not.have.been.called;
    wrapper.simulate('click');
    expect(props.onClick).to.have.been.called;
  });

  it('should have a <Button /> with name \'thumb_up\'', () => {
    const props = {
      onClick: sinon.spy()
    };

    const wrapper = shallow(<LikeButton {...props} />);
    const actual = wrapper.find(Button).prop('name');
    const expected = 'thumb_up';

    expect(actual).to.equal(expected);
  });
});
