import React, { useContext } from "react";
import { CartContext } from "./context/context";

export const AddToCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const addProductToCard = () => {
    dispatch({ type: "ADD_PRODUCT_TO_CART" });
  };
  return <button onClick={addProductToCard}>add to cart</button>;
};
