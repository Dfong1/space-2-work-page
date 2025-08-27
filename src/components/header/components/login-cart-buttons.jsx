import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENT

import PersonOutline from "@mui/icons-material/PersonOutline"; // CUSTOM ICON COMPONENT

import ShoppingBagOutlined from "@/icons/ShoppingBagOutlined"; // GLOBAL CUSTOM HOOK

import useCart from "@/hooks/useCart"; // ==============================================================
import { useAuth } from "@/hooks/auth/useAuth";
import { MenuBook, Person, ShoppingBag, ShoppingCartOutlined } from "@mui/icons-material";

// ==============================================================
export default function LoginCartButtons({
  toggleDialog,
  toggleSidenav,
  setDialogSoonOpen = () => {},
}) {
  const { user } = useAuth();
  const { state } = useCart();
  
  const ICON_COLOR = {
    color: "grey.600",
  };

  const handleUserClick = () => {
    if (!user?.id) {
      toggleDialog();
      return;
    }
    window.location.href = "/customer/profile";
  };

  const handleCartClick = () => {
    const user_role = user?.rol;
    console.log({ user_role });
      toggleSidenav();
      //setDialogSoonOpen(true);
  };

  return (
    <div>
      {/* <IconButton onClick={handleUserClick}>
        <Person sx={ICON_COLOR} />
      </IconButton>

      <Badge badgeContent={1} color="primary">
        <IconButton onClick={handleCartClick}>
          <ShoppingBag sx={ICON_COLOR} />
        </IconButton>
      </Badge> */}
    </div>
  );
}
