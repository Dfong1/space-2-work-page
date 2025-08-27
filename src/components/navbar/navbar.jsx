// LOCAL CUSTOM COMPONENTS
import { FlexBox } from "@/components/flex-box";
import Categories from "./categories";

import { NavBarWrapper, InnerContainer } from "./styles"; // DATA TYPES
import { Link } from "@mui/material";

import FacebookFilled from "@/icons/FacebookFilled";
import InstagramFilled from "@/icons/InstagramFilled";
import { Facebook, Instagram } from "@mui/icons-material";
// ==========================================================
const socialLinks = [
  {
    id: 0,
    Icon: Facebook,
    url: "",
  },
  {
    id: 1,
    Icon: Instagram,
    url: "",
  },
];
// ==========================================================
export default function Navbar({
  border,
  elevation = 2,
  hideCategories = false,
  categories = [],
}) {
  return (
    <NavBarWrapper hoverEffect={false} elevation={elevation} border={border}>
      {hideCategories ? (
        <InnerContainer
          sx={{
            justifyContent: "center",
          }}
        >
          {/* <NavigationList /> */}
        </InnerContainer>
      ) : (
        <InnerContainer>
          {/* CATEGORY MEGA MENU */}
        </InnerContainer>
      )}
    </NavBarWrapper>
  );
}
