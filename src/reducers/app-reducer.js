// import {
//   APP_STARTED,
// } from '../constants';

const defaultState = {
};

export default (state = defaultState, payload) => {
  switch (payload.type) {
    case 'APP_STARTED':
      return { ...state };

    default:
      return state;
  }
};
