export default ({merchantId, customerId, amount, bank}) => (dispatch) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      merchantId,
      customerId,
      amount,
      bank,
    }),
  };

  dispatch({ type: 'TRANSACTION_INITIATING_REQUEST' });

  return fetch(`${process.env.REACT_APP_API_URL}/Transactions`, options)
    .then((response) => {
      if (!response.ok) {
        dispatch({ type: 'TRANSACTION_INITIATING_ERROR' });
      }

      return response.json();
    })
    .then((data) => {
      dispatch({ type: 'TRANSACTION_INITIATING_SUCCESS', data });
      return data;
    });
};
