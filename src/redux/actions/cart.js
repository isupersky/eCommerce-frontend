import * as actionTypes from "./actionTypes";

export const updateCart = (cartItem) => {
  console.log("Action triggered", cartItem);
  return {
    type: actionTypes.CART_UPDATE,
    cartItem: cartItem,
  };
};

export const addToCart = (cartItem) => {
    console.log("addToCart Action triggered", cartItem);
    return {
      type: actionTypes.CART_ADD,
      cartItem: cartItem,
    };
  };

  export const deleteFromCart = (cartItem) => {
    console.log("deleteFromCart Action triggered", cartItem);
    return {
      type: actionTypes.CART_DELETE,
      cartItem: cartItem,
    };
  };
