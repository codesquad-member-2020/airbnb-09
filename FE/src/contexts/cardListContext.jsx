import React, { createContext, useMemo, useReducer } from "react";
import reducer from "Reducers/cardReducer";
import { cardListInitialState } from "InitialStates/initialStates";

const CardListContext = createContext();

const CardListProvider = ({ children }) => {
  const [cardList, cardListDispatch] = useReducer(reducer, cardListInitialState);

  const contextValue = useMemo(
    () => ({
      cardList,
      cardListDispatch,
    }),
    [cardList, cardListDispatch],
  );

  return <CardListContext.Provider value={contextValue}>{children}</CardListContext.Provider>;
};

export { CardListContext, CardListProvider };
