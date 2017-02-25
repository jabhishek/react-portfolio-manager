import {mapStateToProps} from './portfolio-container';
import { expect } from 'chai';

const portfolios = [
  {
    _id: '58acd261e54c15be05edd4fb',
    portfolio: 'LLL',
    userName: '105140794597595023379'
  },
  {
    _id: '58ae0ce9f3fa8ec83b5edd96',
    portfolio: 'LLLL',
    userName: '105140794597595023379'
  },
  {
    _id: '58aca9b637db04ba27fbf445',
    portfolio: 'Test',
    userName: '105140794597595023379'
  },
  {
    _id: '58aca94937db04ba27fbf444',
    portfolio: 'aaa',
    userName: '105140794597595023379'
  }
];

describe('portfolio-container', () => {
  describe('mapStateToProps', () => {
    it('should return the portfolio matching the id prop', () => {
      expect(mapStateToProps({ portfolios }, { params: { id: '58acd261e54c15be05edd4fb' } })).to.deep.equal({ portfolio: portfolios[0] });
      expect(mapStateToProps({ portfolios }, { params: { id: '58acd261e54c15b5edd4fb' } })).to.deep.equal({ portfolio: undefined });
    });
  });
});
