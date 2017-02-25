import React, { Component, PropTypes } from 'react';

class Portfolio extends Component {
  render () {
    const { portfolio } = this.props;
    console.log(this.props, portfolio);
    return (
      <div className="portfolio">
        Portfolio
      </div>
    );
  }
}
Portfolio.propTypes = {
  portfolio: PropTypes.object
};

export default Portfolio;
