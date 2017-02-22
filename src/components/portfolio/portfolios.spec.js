import React from 'react';
import {shallow} from 'enzyme';
import PortfolioPageInj from 'inject!./portfolios';
import { expect } from 'chai';

class AddPortfolio extends React.Component {
  render () {
    return (
      <div>Test</div>
    );
  }
}

const PortfolioPage = PortfolioPageInj({
  './add-portfolio/add-portfolio-connect': AddPortfolio
}).default;

describe('Portfolios', () => {
  let wrapper;

  function setup (portfolios) {
    const props = {
      portfolios: portfolios,
      portfolioActions: {
        getPortfolios: () => {
          return Promise.resolve();
        }
      }
    };
    wrapper = shallow(<PortfolioPage {...props}/>);

    return {
      wrapper,
      props
    };
  }

  beforeEach(() => {
    setup([]);
  });

  it('should exist', () => {
    expect(wrapper.find('.container').length).to.equal(1);
  });
  it('should have AddPortfolio component', () => {
    expect(wrapper.find('AddPortfolio').length).to.equal(1);
  });
  it('should have a separator', () => {
    expect(wrapper.find('.separator').length).to.equal(1);
  });
  describe('SubHeader', () => {
    it('should have SubHeader component', () => {
      expect(wrapper.find('SubHeader').length).to.equal(1);
    });
    it('should have headerText property', () => {
      const props = wrapper.find('SubHeader').props();
      expect(props.headerText).to.equal('All Portfolios');
    });
  });
  describe('PortfolioList', () => {
    it('should be present', () => {
      const {wrapper} = setup();
      expect(wrapper.find('Connect(PortfolioList)').length).to.equal(1);
    });
    it('should have portfolios property set as ', () => {
      const {wrapper} = setup(['XYZ']);
      const props = wrapper.find('Connect(PortfolioList)').props();
      expect(props.portfolios).to.deep.equal(['XYZ']);
    });
  });
});
