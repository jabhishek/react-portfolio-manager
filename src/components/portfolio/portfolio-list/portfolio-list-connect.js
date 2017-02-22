import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import PortfolioList from './portfolio-list';

const mapDispatchToProps = (dispatch) => {
  return {
    push: bindActionCreators(push, dispatch)
  }
};

export default connect(null, mapDispatchToProps)(PortfolioList);
