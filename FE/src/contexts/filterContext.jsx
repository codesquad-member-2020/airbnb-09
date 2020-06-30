import React, { createContext, useMemo, useReducer } from "react";
import reducer from "Reducers/filterReducer";
import { filterInitialState } from "InitialStates/initialStates";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [queries, filterDispatch] = useReducer(reducer, filterInitialState);

  const contextValue = useMemo(
    () => ({
      queries,
      filterDispatch,
    }),
    [queries, filterDispatch],
  );

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};

export { FilterContext, FilterProvider };
