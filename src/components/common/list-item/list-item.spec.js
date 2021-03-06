import React from 'react';
import {shallow} from 'enzyme';
import ListItem from './list-item';
import {expect} from 'chai';
import sinon from 'sinon';
describe('ListItem', () => {
  it('should have the class list', () => {
    const wrapper = shallow(<ListItem />);
    console.log(wrapper.html());
    expect(wrapper.find('.list-item').length).to.equal(1);
  });
  it('should add passed class to class list', () => {
    const wrapper = shallow(<ListItem className="my-class"/>);
    expect(wrapper.find('.list-item').length).to.equal(1);
    expect(wrapper.find('.my-class').length).to.equal(1);
  });
  it('should render children passed', () => {
    const wrapper = shallow(<ListItem>
      <li>Hey</li>
    </ListItem>);
    expect(wrapper.contains(<li>Hey</li>)).to.equal(true);
  });
  it('should invoke onClick handler on click', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<ListItem onClick={spy}>
      <li>Hey</li>
    </ListItem>);
    wrapper.simulate('click');
    expect(spy).to.have.been.calledOnce;
  });
});
