import React, { Component, PropTypes } from 'react';
import TradesForm from './trades-form/trades-form';

class Portfolio extends Component {
  render () {
    const { portfolio } = this.props;
    console.log(this.props, portfolio);
    return (
      <div className="portfolio">
        <TradesForm/>
      </div>
    );
  }
}
Portfolio.propTypes = {
  portfolio: PropTypes.object
};

export default Portfolio;
