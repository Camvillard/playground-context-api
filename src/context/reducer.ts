export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cartTotalItems: state.cartTotalItems + 1,
        cartTotalPrice: state.cartTotalPrice + 10,
      };
    default:
      throw new Error();
  }
};
