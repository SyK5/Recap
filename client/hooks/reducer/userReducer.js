export const userInitialState = {
  user: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  },
  isLoggedIn: false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case "LOGGED":
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
};
