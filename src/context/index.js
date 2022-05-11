import { useMemo, useReducer, createContext, useContext } from "react";

const Context = createContext(null);

export const useAppState = () => {
  return useContext(Context);
}

export default function AppContext({ initialState, reducers, children }) {
  const [state, dispatch] = useReducer(reducers, initialState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
