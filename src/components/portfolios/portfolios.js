import React from 'react';
import Subheader from '../common/sub-header/sub-header';
import PortfolioList from './portfolio-list/portfolio-list-connect';
import AddPortfolio from './add-portfolio/add-portfolio-connect';

export default class PortfolioPage extends React.Component {
  render () {
    return (
      <div className="container">
        <AddPortfolio />
        <div className="separator"></div>
        <Subheader headerText="All Portfolios"></Subheader>
        <PortfolioList portfolios={ this.props.portfolios}/>
      </div>
    );
  }
}
PortfolioPage.propTypes = {
  portfolios: React.PropTypes.array
};

