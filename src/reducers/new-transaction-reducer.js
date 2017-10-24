const defaultState = {
  isFetching: false,
  isCreated: false,
  details: {
    merchantId: 'biapt',
    createdOn: new Date('2017-10-24T15:48:38.670Z'),
    customerId: 'john.doe@customer.tld',
    status: 'open',
    amount: 2998.99,
    bank: 'cgd',
    id: '59ef60d6a9be0f6dbbe9c2db'
  },
  error: null
};

export default (state = defaultState, payload) => {
  switch (payload.type) {
    case 'TRANSACTION_INITIATING_REQUEST':
      return {...state, isFetching: true, isCreated: false};

    case 'TRANSACTION_INITIATING_ERROR':
      return {...state, isFetching: false, isCreated: false, details: false, error: 'Error creating transaction'};

    case 'TRANSACTION_INITIATING_SUCCESS':
      return {...state, isFetching: false, isCreated: true, details: payload.data, error: null};

    default:
      return state;
  }
};
