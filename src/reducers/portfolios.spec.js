import portfolioReducer, {initialPortfolios} from './portfolios';
import {ADD_PORTFOLIO, SET_PORTFOLIOS} from '../constants';
import {expect} from 'chai';

describe('portfolios reducer', () => {
  it('should return default state if no state passed', () => {
    expect(portfolioReducer()).to.deep.equal(initialPortfolios);
  });
  it('should return default state if no action passed', () => {
    expect(portfolioReducer([])).to.deep.equal([]);
  });
  it('should return default state if action has no type passed', () => {
    expect(portfolioReducer([], {})).to.deep.equal([]);
  });

  describe('Add portfolio', () => {
    it('should add portfolio', () => {
      const portfolioAdded = {_id: 2, portfolio: 'TEST2'};
      expect(portfolioReducer([], {type: ADD_PORTFOLIO, payload: portfolioAdded})).to.deep.equal([portfolioAdded]);
      expect(portfolioReducer(initialPortfolios, {type: ADD_PORTFOLIO, payload: portfolioAdded}))
        .to.deep.equal([...initialPortfolios, portfolioAdded]);
    });
  });
  describe('Set portfolios', () => {
    it('should set portfolios', () => {
      const portfolios = [{_id: 3, portfolio: 'TEST3'}, {_id: 4, portfolio: 'TEST4'}];
      const action = {
        type: SET_PORTFOLIOS,
        payload: {
          portfolios: portfolios
        }
      };
      expect(portfolioReducer([], action)).to.deep.equal(portfolios);
      expect(portfolioReducer(initialPortfolios, action)).to.deep.equal(portfolios);
      expect(portfolioReducer(initialPortfolios, {type: SET_PORTFOLIOS, payload: null})).to.deep.equal(initialPortfolios);
      expect(portfolioReducer(initialPortfolios, {
        type: SET_PORTFOLIOS,
        payload: {portfolios: null}
      })).to.equal(initialPortfolios);
    });
  });
});
