export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      return !state;
  }
};
