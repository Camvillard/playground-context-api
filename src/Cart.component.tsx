import React, { useContext } from "react";
import { CartContext } from "./context/context";

export const Cart = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      <p>your cart has {state.cartTotalItems} items</p>
      <p>your total to pay if {state.cartTotalPrice} $</p>
    </div>
  );
};
