import React, { useReducer } from "react";
import { cartReducer } from "./reducer";

export const ThemeContext = React.createContext("light");

type Store = {
  cartTotalItems: number;
  cartTotalPrice: number;
};

export const initialStore = {
  cartTotalItems: 1,
  cartTotalPrice: 10,
};

export const CartContext = React.createContext<{
  state: Store;
  dispatch: React.Dispatch<any>;
}>({ state: initialStore, dispatch: () => null });

export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, initialStore);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
