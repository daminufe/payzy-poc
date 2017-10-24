export default (transaction) => (dispatch) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({
      ...transaction,
      status: 'completed'
    }),
  };

  dispatch({ type: 'TRANSACTION_COMPLETE_REQUEST' });

  return fetch(`${process.env.REACT_APP_API_URL}/Transactions/${transaction.id}`, options)
    .then((response) => {
      if (!response.ok) {
        dispatch({ type: 'TRANSACTION_COMPLETE_ERROR' });
      }

      return response.json();
    })
    .then((data) => {
      dispatch({ type: 'TRANSACTION_COMPLETE_SUCCESS', data });
      return data;
    });
};
