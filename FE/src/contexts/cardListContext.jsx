import React, { createContext, useMemo, useReducer } from "react";
import reducer from "Reducers/cardReducer";

const initialState = {
  data: [],
};

const CardListContext = createContext();

const CardListProvider = ({ children }) => {
  const [cardList, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(
    () => ({
      cardList,
      dispatch,
    }),
    [cardList, dispatch],
  );

  return <CardListContext.Provider value={contextValue}>{children}</CardListContext.Provider>;
};

export { CardListContext, CardListProvider };
