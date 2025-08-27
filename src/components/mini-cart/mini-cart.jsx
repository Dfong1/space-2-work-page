import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider"; // GLOBAL CUSTOM HOOK

import useCart from "@/hooks/useCart"; // LOCAL CUSTOM COMPONENTS

import TopHeader from "./components/top-header";
import MiniCartItem from "./components/cart-item";
import EmptyCartView from "./components/empty-view";
import BottomActions from "./components/bottom-actions"; // GLOBAL CUSTOM COMPONENT

import Scrollbar from "@/components/scrollbar"; // CUSTOM UTILS LIBRARY FUNCTION

import { currency } from "@/helpers"; // CUSTOM DATA MODEL
import { useEffect, useState } from "react";
import fetchData from "@/utils/fetchData";
import { Skeleton } from "@mui/material";

// =========================================================
export default function MiniCart({ toggleSidenav }) {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [sinStock, setSinStock] = useState([])
  const [noActivo, setNoActivo] = useState([])
  const { state, dispatch } = useCart();
  const cartList = state.cart;

  const handleCartAmountChange = (amount, product) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { ...product, qty: amount },
    });
  };

  const getTotalPrice = () => {
    return cartList.reduce((acc, item) => acc + item.price * item.qty, 0);
  };

  const handleNavigate = (path) => () => {
    toggleSidenav();
    push(path);
  };

  return (
    <Box width="100%" minWidth={380}>
      {/* HEADING SECTION */}
      <TopHeader toggle={toggleSidenav} total={cartList.length} />

      <Divider />
      <Box height={`calc(100vh - ${cartList.length ? "207px" : "75px"})`}>
        {/* CART ITEM LIST */}
        {cartList.length > 0 ? (
          <Scrollbar>
            {cartList.map((item) => {
              
              const productoSinStock = sinStock.find(producto => producto.id === item.id)
              const productoNoDisponible = noActivo.find(producto => producto.id === item.id)

              return (
                <MiniCartItem
                item={item}
                key={item.id}
                handleCartAmountChange={handleCartAmountChange}
                sinStock={productoSinStock}
                noActivo={productoNoDisponible}
                isLoading={isLoading}
              />
              )
            })}
          </Scrollbar>
        ) : (
          <EmptyCartView />
        )}
      </Box>

      {/* CART BOTTOM ACTION BUTTONS */}
      {cartList.length > 0 ? (
        <BottomActions
          sinStock={sinStock}
          total={currency(getTotalPrice())}
          handleNavigate={handleNavigate}
          isLoading={isLoading}
          noActivo={noActivo}
        />
      ) : null}
    </Box>
  );
}
