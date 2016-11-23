import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Paper from 'material-ui/Paper';
import { white, black } from 'material-ui/styles/colors';
import ResultPanel from '../../src/components/ResultPanel';

chai.should();
chai.use(sinonChai);

describe('<ResultPanel />', () => {
  it('should contain <Paper />', () => {
    const props = {
      backgroundColor: white,
      color: black,
      title: 'test'
    };

    const wrapper = shallow(<ResultPanel {...props} />);
    expect(wrapper.find(Paper)).to.be.length(1);
  });

  it('should contain <Paper /> with className \'result-panel\'', () => {
    const props = {
      backgroundColor: white,
      color: black,
      title: 'test'
    };

    const wrapper = shallow(<ResultPanel {...props} />);
    const actual = wrapper.find(Paper).prop('className');
    const expected = 'result-panel';

    expect(actual).to.equal(expected);
  });

  it('should contain <Paper /> with backgroundColor in style', () => {
    const props = {
      backgroundColor: white,
      color: black,
      title: 'test'
    };

    const wrapper = shallow(<ResultPanel {...props} />);
    const actual = wrapper.find(Paper).prop('style');
    const expected = props.backgroundColor

    expect(actual.backgroundColor).to.equal(expected);
  });

  it('should contain <Paper /> with color in style', () => {
    const props = {
      backgroundColor: white,
      color: black,
      title: 'test'
    };

    const wrapper = shallow(<ResultPanel {...props} />);
    const actual = wrapper.find(Paper).prop('style');
    const expected = props.color

    expect(actual.color).to.equal(expected);
  });

  it('should contain a div with className \'result-panel-title\'', () => {
    const props = {
      backgroundColor: white,
      color: black,
      title: 'test'
    };

    const wrapper = shallow(<ResultPanel {...props} />);
    const actual = wrapper.find('div').at(0).prop('className');
    const expected = 'result-panel-title';

    expect(actual).to.equal(expected);
  });

  it('should contain a div with title', () => {
    const props = {
      backgroundColor: white,
      color: black,
      title: 'test'
    };

    const wrapper = shallow(<ResultPanel {...props} />);
    const actual = wrapper.find('div.result-panel-title').prop('children');
    const expected = props.title;

    expect(actual).to.equal(expected);
  });

  it('should contain a div with className \'result-panel-content\'', () => {
    const props = {
      backgroundColor: white,
      color: black,
      title: 'test'
    };

    const wrapper = shallow(<ResultPanel {...props} />);
    const actual = wrapper.find('div').at(1).prop('className');
    const expected = 'result-panel-content';

    expect(actual).to.equal(expected);
  });
});
