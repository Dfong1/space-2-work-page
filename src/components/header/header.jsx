import Link from "next/link";
import { Fragment } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx"; // LOCAL CUSTOM HOOKS

import useHeader from "./hooks/use-header"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "@/components/LazyImage";
import NavigationList from "@/components/navbar/nav-list/nav-list";
import FlexBox from "@/components/flex-box/flex-box"; // LOCAL CUSTOM COMPONENTS
import { SearchInputWithCategory } from "@/components/search-box";

import MobileHeader from "./components/mobile-header";
import DialogDrawer from "./components/dialog-drawer";
import CategoriesMenu from "./components/categories-menu";
import LoginCartButtons from "./components/login-cart-buttons"; // STYLED COMPONENTS

import { HeaderWrapper, StyledContainer } from "./styles"; // ==============================================================
import { Box } from "@mui/material";

// ==============================================================
export default function Header({
  isFixed,
  className,
  midSlot,
  setDialogSoonOpen = () => {},
  categories = [],
  products = [],
  fullcategories = [],
}) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down(1150));
  const { dialogOpen, sidenavOpen, sidenavCatalogOpen, toggleDialog, toggleSidenav, toggleSidenavCatalog } = useHeader();
  const CONTENT_FOR_LARGE_DEVICE = (
    <Fragment>
      {/* LEFT CONTENT - LOGO AND CATEGORY */}
      <FlexBox
        minWidth={700}
        justifyContent="center"
        alignItems="center"
        columnGap={2}
      >
        <Link href="/">
          <LazyImage
            src={require("../../../public/images/logo2.jpg")}
            alt="logo"
            height={44}
          />
        </Link>
        <SearchInputWithCategory />
      </FlexBox>
      {/* SEARCH FORM | NAVIGATION */}
      {midSlot}
      {/* LOGIN AND CART BUTTON */}

      <Box display="flex" alignItems="center" columnGap={3} minWidth={100} >
        <NavigationList />
        <LoginCartButtons
          toggleDialog={toggleDialog}
          toggleSidenav={toggleSidenav}
          toggleSidenavCatalog={toggleSidenavCatalog}
          setDialogSoonOpen={setDialogSoonOpen}
        />
      </Box>
      {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
      <DialogDrawer
        dialogOpen={dialogOpen}
        sidenavOpen={sidenavOpen}
        sidenavCatalogOpen={sidenavCatalogOpen}
        toggleDialog={toggleDialog}
        toggleSidenav={toggleSidenav}
        toggleSidenavCatalog={toggleSidenavCatalog}
      />
    </Fragment>
  );
  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
        {downMd ? <MobileHeader fullcategories={fullcategories} products={products} categories={categories} /> : CONTENT_FOR_LARGE_DEVICE}
      </StyledContainer>
    </HeaderWrapper>
  );
}
