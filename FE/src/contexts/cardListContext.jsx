import React, { createContext } from "react";

const CardListContext = createContext(initialState);

const CardListProvider = ({ children }) => {
  return <CardListContext.Provider>{children}</CardListContext.Provider>;
};

export { CardListContext, CardListProvider };
