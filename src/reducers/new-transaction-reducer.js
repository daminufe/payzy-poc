const defaultState = {
  isFetching: false,
  isCreated: false,
  details: null,
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
