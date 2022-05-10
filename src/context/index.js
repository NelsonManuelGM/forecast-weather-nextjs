import { useMemo, useReducer, createContext } from "react";

const Context = createContext(null);

export default function AppContext({ initialState, reducers, children }) {
  const [state, dispatch] = useReducer(reducers, initialState);

  const value = useMemo(() => {
    return { state: state, dispatch: dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
