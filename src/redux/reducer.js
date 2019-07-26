import {
  ADD_TRANSACTIONS,
  UPDATE_CURRENCY,
  UPDATE_TRANSACTION_TYPE
} from './actions.js';

const INITIAL_STATE = {
  currency: '',
  transactionType: '',
  transactions: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions
        };
    case UPDATE_CURRENCY:
      return {
        ...state,
        currency: action.currency
      };
    case UPDATE_TRANSACTION_TYPE:
      return {
        ...state,
        transactionType: action.transactionType
      };
    default:
    return state;
  }
};