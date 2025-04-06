import React, { Children, createContext, useReducer } from "react";
import { useContext } from "react";
import { userInitialState, userReducer } from "../reducer/userReducer";

export const MainContext = createContext();

const Main_Context = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  return (
    <MainContext.Provider value={[userState, userDispatch]}>
      {children}
    </MainContext.Provider>
  );
};

export default Main_Context;
