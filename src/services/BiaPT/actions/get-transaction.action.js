export default (transactionId) => (dispatch) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  dispatch({ type: 'TRANSACTION_FETCH_REQUEST' });

  return fetch(`${process.env.REACT_APP_API_URL}/Transactions/${transactionId}`, options)
    .then((response) => {
      if (!response.ok) {
        dispatch({ type: 'TRANSACTION_FETCH_REQUEST' });
      }

      return response.json();
    })
    .then((data) => {
      dispatch({ type: 'TRANSACTION_FETCH_SUCCESS', data });
      return data;
    });
};
