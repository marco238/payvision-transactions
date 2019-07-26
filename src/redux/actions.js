export const ADD_TRANSACTIONS = 'ADD_TRANSACTIONS';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const UPDATE_TRANSACTION_TYPE = 'UPDATE_TRANSACTION_TYPE';

export const addTransactions = (transactions) => {
  return {
    type: ADD_TRANSACTIONS,
    transactions
  };
};

export const updateCurrency = (currency) => {
  return {
    type: UPDATE_CURRENCY,
    currency
  };
};

export const updateTransactionType = (transactionType) => {
  return {
    type: UPDATE_TRANSACTION_TYPE,
    transactionType
  };
};
