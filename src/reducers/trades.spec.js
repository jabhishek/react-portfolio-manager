import tradesReducer from './trades';
import {ADD_TRADE, SET_TRADES} from '../constants';
import {expect} from 'chai';

describe('trades reducer', () => {
  it('should return default state if no action passed', () => {
    expect(tradesReducer([])).to.deep.equal([]);
  });
  it('should return default state if action has no type passed', () => {
    expect(tradesReducer([], {})).to.deep.equal([]);
  });
  describe('SET_TRADES', () => {
    it('should replace trades in state', () => {
      const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];
      const newTrades = [{ code: 'XYZ', price: 100, quantity: 25 }];

      expect(tradesReducer(initialTrades, { type: SET_TRADES, payload: newTrades })).to.deep.equal(newTrades);
    });
    it('should return default state if action has no payload', () => {
      const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];

      expect(tradesReducer(initialTrades, { type: SET_TRADES })).to.deep.equal(initialTrades);
    });
    it('should convert to an array and set if payload is not an array', () => {
      const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];
      const newTrades = { code: 'XYZ', price: 100, quantity: 25 };

      expect(tradesReducer(initialTrades, { type: SET_TRADES, payload: newTrades })).to.deep.equal([newTrades]);
    });
  });
  describe('ADD_TRADE', () => {
    it('should add to trades in state', () => {
      const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];
      const tradeToAdd = { code: 'XYZ', price: 100, quantity: 25 };
      const tradesAfter = [{ code: 'ABC', price: 100, quantity: 25 }, { code: 'XYZ', price: 100, quantity: 25 }];

      expect(tradesReducer(initialTrades, { type: ADD_TRADE, payload: tradeToAdd })).to.deep.equal(tradesAfter);
    });
    it('should add to trades in state if array of trades passed', () => {
      const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];
      const tradeToAdd = [{ code: 'XYZ', price: 100, quantity: 25 }];
      const tradesAfter = [{ code: 'ABC', price: 100, quantity: 25 }, { code: 'XYZ', price: 100, quantity: 25 }];

      expect(tradesReducer(initialTrades, { type: ADD_TRADE, payload: tradeToAdd })).to.deep.equal(tradesAfter);
    });
    it('should return default state if action has no payload', () => {
      const initialTrades = [{ code: 'ABC', price: 100, quantity: 25 }];

      expect(tradesReducer(initialTrades, { type: ADD_TRADE })).to.deep.equal(initialTrades);
    });
  });
});
