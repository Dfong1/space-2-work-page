"use client";

import { createContext, useEffect, useMemo, useReducer, useState } from "react";

export const CartContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.stock < cartItem.qty) return state;
      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        return { ...state, cart: filteredCart };
      }

      // Verificar si está disponible en el inventario
      if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
        );
        return { ...state, cart: newCart };
      }

      return { ...state, cart: [...cartList, cartItem] };

    case "INITIALIZE_CART":
      return { ...state, cart: action.payload };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

let init = false;
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { cart: [] });

  useEffect(() => {
    // Ejecutar solo en el lado del cliente

    if (typeof window !== "undefined" && !init) {
      init = true;
      const initialCart = initalFromLocalStorage();

      dispatch({ type: "INITIALIZE_CART", payload: initialCart });
    }
  }, []);

  useEffect(() => {
    // Ejecutar solo en el lado del cliente
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  }, [state.cart]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const initalFromLocalStorage = () => {
  try {
    const result = localStorage.getItem("cart");
    return result ? JSON.parse(result) : [];
  } catch (error) {
    console.error(
      "Error al recuperar el carrito desde el almacenamiento local:",
      error
    );
    return [];
  }
};

export default CartProvider;
