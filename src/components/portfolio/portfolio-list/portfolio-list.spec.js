import React from 'react';
import {shallow} from 'enzyme';
import PortfolioList from './portfolio-list';
import { expect } from 'chai';

describe('Portfolio List', () => {
  it('should have no List and ListItem if no portfolios passed', () => {
    const wrapper = shallow(<PortfolioList />);
    expect(wrapper.find('List').length).to.equal(0);
    expect(wrapper.find('ListItem').length).to.equal(0);
  });
  it('should have no ListItems if empty portfolios passed', () => {
    const wrapper = shallow(<PortfolioList portfolios={[]}/>);
    expect(wrapper.find('List').length).to.equal(1);
    expect(wrapper.find('ListItem').length).to.equal(0);
  });
  it('should have ListItems equal to number of portfolios passed', () => {
    const portfolios = [
      {_id: '1', portfolio: 'Test'},
      {_id: '2', portfolio: 'Test1'}
    ];
    const wrapper = shallow(<PortfolioList portfolios={portfolios}/>);
    expect(wrapper.find('List').length).to.equal(1);
    expect(wrapper.find('ListItem').length).to.equal(2);
  });
  it('should correctly set key and text of listitems', () => {
    const portfolios = [
      {_id: '1', portfolio: 'Test'},
      {_id: '2', portfolio: 'Test1'}
    ];
    const wrapper = shallow(<PortfolioList portfolios={portfolios}/>);
    const firstItem = wrapper.find('ListItem').first();

    expect(firstItem.key()).to.equal('1');
    expect(firstItem.props().children).to.equal('Test');
  });
});
