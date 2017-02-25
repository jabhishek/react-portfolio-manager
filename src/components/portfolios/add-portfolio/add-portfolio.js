import React, { Component, PropTypes } from 'react';
import Subheader from '../../common/sub-header/sub-header';
import TextField from 'material-ui/TextField';
import styles from './add-portfolio.less';

export default class AddPortfolio extends Component {
  constructor (props) {
    super(props);
    this.state = {
      portfolio: ''
    };
  }

  addPortfolio (e) {
    this.props.addPortfolio(this.state.portfolio)
      .then(() => {
        console.log('portfolio created successfully');
        this.setState({
          portfolio: ''
        });
      })
      .catch(err => {
        console.log(err.message);
      });
    e.preventDefault();
  }

  onPortfolioChanged (e) {
    this.setState({
      portfolio: e.target.value
    });
  }

  render () {
    return (
            <div className={styles.addPortfolio}>
                <Subheader headerText="Add New Portfolio"></Subheader>
                <form onSubmit={ this.addPortfolio.bind(this) }>
                    <TextField hintText="Enter Portfolio Name"
                                value={ this.state.portfolio }
                                onChange={ this.onPortfolioChanged.bind(this) }/>
                </form>
            </div>
    );
  }
}
AddPortfolio.propTypes = {
  addPortfolio: PropTypes.func
};
