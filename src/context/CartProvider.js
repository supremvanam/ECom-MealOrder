import CartContext from "./cart-context";
import { useReducer } from "react";

const ACTIONS = {
  ADD_ITEM: "ADD",
  REMOVE_ITEM: "REMOVE",
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const updatedItems = state.items.concat(action.payload.item);
      const updatedTotalAmount = state.totalAmount + action.payload.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case ACTIONS.REMOVE_ITEM:
      return;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: ACTIONS.ADD_ITEM, payload: { item: item } });
  };
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
