import React, { Component } from 'react';
import List from '../../common/list/list';
import ListItem from '../../common/list-item/list-item';

export default class PortfolioList extends Component {
  onClick = id => () => {
    console.log('clicked');
    this.props.push(`/portfolio/${id}`);
  };

  render () {
    const {portfolios} = this.props;
    const items = [];
    if (!portfolios) {
      return (
        <div className="no-items"></div>
      );
    }
    portfolios.forEach(p => {
      items.push(<ListItem key={ p._id } onClick={ this.onClick(p._id) }>{ p.portfolio }</ListItem>);
    });

    return (
      <List>
        { items }
      </List>
    );
  }
}

PortfolioList.propTypes = {
  push: React.PropTypes.func,
  portfolios: React.PropTypes.array
};
