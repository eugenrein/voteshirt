import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Page from '../../src/components/Page.js';
import Navigation from '../../src/components/Navigation.js';
import NavigationPage from '../../src/components/NavigationPage.js';

chai.should();
chai.use(sinonChai);

describe('<NavigationPage />', () => {
  it('should contain a div with className \'navigation-page-wrapper\'', () => {
    const props = {
      name: 'test'
    };

    const wrapper = shallow(<NavigationPage {...props} />);
    const actual = wrapper.find('div').at(0).prop('className');
    const expected = 'navigation-page-wrapper';

    expect(actual).to.equal(expected);
  });

  it('should contain a div with className \'navigation-page\'', () => {
    const props = {
      name: 'test'
    };

    const wrapper = shallow(<NavigationPage {...props} />);
    const actual = wrapper.find('div').at(1).prop('className');
    const expected = 'navigation-page';

    expect(actual).to.equal(expected);
  });

  it('should contain <Page />', () => {
    const props = {
      name: 'test'
    };

    const wrapper = shallow(<NavigationPage {...props} />);
    expect(wrapper.find(Page)).to.be.length(1);
  });

  it('should contain <Page /> with specified name', () => {
    const props = {
      name: 'test'
    };

    const wrapper = shallow(<NavigationPage {...props} />);
    const actual = wrapper.find(Page).prop('name');
    const expected = props.name;

    expect(actual).to.equal(expected);
  });

  it('should contain <Navigation />', () => {
    const props = {
      name: 'test'
    };

    const wrapper = shallow(<NavigationPage {...props} />);
    expect(wrapper.find(Navigation)).to.be.length(1);
  });
});
