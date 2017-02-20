import React from 'react';
import {shallow} from 'enzyme';
import SubHeader from './sub-header';
import { expect } from 'chai';

describe('SubHeader', () => {
  it('should have the class sub-header', () => {
    const wrapper = shallow(<SubHeader />);
    expect(wrapper.find('.sub-header').length).to.equal(1);
  });
  it('should render the text passed as headerText', () => {
    const wrapper = shallow(<SubHeader headerText="text"/>);
    expect(wrapper.find('.sub-header').text()).to.equal('text');
  });
  it('should add passed class to class list', () => {
    const wrapper = shallow(<SubHeader headerText="text" className="my-class"/>);
    expect(wrapper.find('.sub-header').length).to.equal(1);
    expect(wrapper.find('.my-class').length).to.equal(1);
  });
});
