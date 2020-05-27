import React, { createContext, useMemo, useReducer } from "react";
import reducer from "Reducers/cardReducer";

const initialState = {};

const CardListContext = createContext();

const CardListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return <CardListContext.Provider value={contextValue}>{children}</CardListContext.Provider>;
};

export { CardListContext, CardListProvider };
