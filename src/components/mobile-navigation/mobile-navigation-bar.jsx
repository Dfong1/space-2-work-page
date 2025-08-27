"use client";

import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery"; // CUSTOM ICON COMPONENTS

import Home from "@/icons/Home";
import User2 from "@/icons/User2";
import CategoryOutlined from "@/icons/CategoryOutline";
import ShoppingBagOutlined from "@/icons/ShoppingBagOutlined"; // GLOBAL CUSTOM HOOK

import useCart from "@/hooks/useCart"; // STYLED COMPONENTS

import { iconStyle, StyledNavLink, Wrapper } from "./styles";
import { MenuBook } from "@mui/icons-material";
import { useAuth } from "@/hooks/auth/useAuth";
export default function MobileNavigationBar({ setDialogSoonOpen = () => {} }) {

  const { user } = useAuth();
  const { state } = useCart();

  const DOWN_900 = false //useMediaQuery((theme) => theme.breakpoints.down(900));

  if (DOWN_900) {
    return (
      <Wrapper>
        {list.map(({ Icon, href, title, disabled }) => {          
          return (
            <StyledNavLink href={disabled ? "#" : href} key={title}>
              {title === "Carrito" ? (
                <Badge badgeContent={state.cart.length} color="primary">
                  <Icon fontSize="small" sx={iconStyle} />
                </Badge>
              ) : (
                <Icon sx={iconStyle} fontSize="small" />
              )}
  
              {title}
            </StyledNavLink>
          )
        })}
      </Wrapper>
    );
  }

  return null;
}
const list = [
  {
    title: "Inicio",
    Icon: Home,
    href: "/",
  },
];
