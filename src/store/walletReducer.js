const initialState = {
  account: null,
  provider: null,
};

const walletReducer = (state = initialState, action) => {
  console.log("+walletReducer", action)
  switch (action.type) {
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        account: action.payload.account,
        provider: action.payload.provider
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };
    case "CONNECTION_FAILED":
      return {
        ...state,
        account: action.payload.account,
        provider: action.payload.provider
      }
    default:
      return state;
  }
};

export default walletReducer;
