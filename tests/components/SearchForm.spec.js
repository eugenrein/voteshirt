import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Logo from '../../src/components/Logo.js';
import SearchForm from '../../src/components/SearchForm';

chai.should();
chai.use(sinonChai);

describe('<SearchForm />', () => {
  it('should contain a div with className \'search-form\'', () => {
    const props = {
      onSubmit: sinon.spy()
    };

    const wrapper = shallow(<SearchForm {...props} />);
    const actual = wrapper.find('div').at(0).prop('className');
    const expected = 'search-form';

    expect(actual).to.equal(expected);
  });

  it('should contain <Logo />', () => {
    const props = {
      onSubmit: sinon.spy()
    };

    const wrapper = shallow(<SearchForm {...props} />);
    expect(wrapper.find(Logo)).to.be.length(1);
  });

  it('should contain a div with className \'search-input\'', () => {
    const props = {
      onSubmit: sinon.spy()
    };

    const wrapper = shallow(<SearchForm {...props} />);
    const actual = wrapper.find('div').at(1).prop('className');
    const expected = 'search-input';

    expect(actual).to.equal(expected);
  });

  it('should contain <TextField />', () => {
    const props = {
      onSubmit: sinon.spy()
    };

    const wrapper = shallow(<SearchForm {...props} />);
    expect(wrapper.find(TextField)).to.be.length(1);
  });

  it('should contain a div with className \'search-submit\'', () => {
    const props = {
      onSubmit: sinon.spy()
    };

    const wrapper = shallow(<SearchForm {...props} />);
    const actual = wrapper.find('div').at(2).prop('className');
    const expected = 'search-submit';

    expect(actual).to.equal(expected);
  });

  it('should contain <RaisedButton />', () => {
    const props = {
      onSubmit: sinon.spy()
    };

    const wrapper = shallow(<SearchForm {...props} />);
    expect(wrapper.find(RaisedButton)).to.be.length(1);
  });

  it('should handle submit', () => {
    const props = {
      onSubmit: sinon.spy()
    };

    const wrapper = shallow(<SearchForm {...props} />);
    const button = wrapper.find(RaisedButton);
    props.onSubmit.should.not.have.been.called;
    button.simulate('click');
    expect(props.onSubmit).to.have.been.called;
  });

});
