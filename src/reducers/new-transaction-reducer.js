const defaultState = {
  isLoaded: false,
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

    case 'TRANSACTION_CANCELLING_REQUEST':
      return {...state, isFetching: true, isCreated: false};

    case 'TRANSACTION_CANCELLING_ERROR':
    case 'TRANSACTION_CANCELLING_SUCCESS':
      return { ...defaultState };

    case 'TRANSACTION_FETCH_REQUEST':
      return {...state, isFetching: true, isCreated: false};

    case 'TRANSACTION_FETCH_ERROR':
      return {...state, isFetching: false, isCreated: false, details: false, error: 'Error fetching transaction'};

    case 'TRANSACTION_FETCH_SUCCESS':
      return {...state, isFetching: false, isCreated: false, details: payload.data, isLoaded: true, error: null};

    default:
      return state;
  }
};
