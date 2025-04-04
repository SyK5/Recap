import axios from "../../src/api/axios.js";

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
      try {
        axios.post(`/users/signup`, { ...action.payload.user });
      } catch (error) {
        console.log('Fehler passiert : ', error);
        
      }
  }
};
