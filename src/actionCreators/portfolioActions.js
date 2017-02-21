import {SET_PORTFOLIOS, ADD_PORTFOLIO} from '../constants';
import request from 'superagent';
import storage from '../utils/localStore';

export const fetchPortfoliosSuccess = (portfolios) => {
  return {
    type: SET_PORTFOLIOS,
    payload: {
      portfolios: portfolios
    }
  };
};

export const addPortfolioSuccess = (portfolio) => {
  return {
    type: ADD_PORTFOLIO,
    payload: portfolio
  };
};

export const getPortfolios = () => {
  return dispatch => {
    const token = storage.get();
    return new Promise((resolve, reject) => {
      request
        .get('/api/portfolios/')
        .accept('application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          if (err) {
            console.log('Unauthorized');
            // reject(err);
          } else {
            const response = JSON.parse(res.text);
            dispatch(fetchPortfoliosSuccess(response.portfolios));
            resolve(response.portfolios);
          }
        });
    });
  };
};

export const addPortfolio = (portfolio) => {
  return dispatch => {
    const token = storage.get();
    return new Promise((resolve, reject) => {
      request
        .post('/api/portfolios/')
        .accept('application/json')
        .send({portfolio: portfolio})
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          if (err) {
            const message = JSON.parse(err.response.text);
            console.log(message);
            reject(message);
            //  dispatch(loginUserFailure(errorMessages));
          } else {
            console.log(err);
            console.log('res', res);
            const {_id} = JSON.parse(res.text);
            dispatch(addPortfolioSuccess({_id, portfolio}));
            resolve();
          }
        });
    });
  };
};
