import Portfolio from './portfolio';
import { connect } from 'react-redux';

export const mapStateToProps = ({ portfolios }, ownProps) => {
  const { params: { id } } = ownProps;
  const portfolio = portfolios.find(i => i._id === id);
  return { portfolio };
};
export default connect(mapStateToProps, null)(Portfolio);
