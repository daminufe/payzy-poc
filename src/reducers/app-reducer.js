const defaultState = {
  merchantId: 'biapt'
};

export default (state = defaultState, payload) => {
  switch (payload.type) {
    case 'APP_STARTED':
      return { ...state };

    default:
      return state;
  }
};
