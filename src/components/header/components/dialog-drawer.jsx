import { Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery"; // LOGIN FORM

import { LoginPageView } from "@/pages-section/sessions/page-view"; // GLOBAL CUSTOM COMPONENTS

import { MiniCart } from "@/components/mini-cart"; // LOGIN PAGE SECTIONS

import { Wrapper } from "@/pages-section/sessions/styles";
import LogoWithTitle from "@/pages-section/sessions/components/logo-title";
import LoginBottom from "@/pages-section/sessions/components/login-bottom";
import SocialButtons from "@/pages-section/sessions/components/social-buttons"; // ==============================================================
// ==============================================================
export default function DialogDrawer(props) {
  const { dialogOpen, sidenavOpen, toggleDialog, toggleSidenav } = props;
  const isMobile = false;
  return (
    <Fragment>
      <Dialog
        scroll="body"
        open={dialogOpen}
        fullWidth={isMobile}
        onClose={toggleDialog}
        sx={{
          zIndex: 9999,
        }}
      >
        <Wrapper>
          <LogoWithTitle />
          <LoginPageView closeDialog={toggleDialog} />
          <SocialButtons />
          <LoginBottom />
        </Wrapper>
      </Dialog>

      <Drawer
        open={sidenavOpen}
        anchor="right"
        onClose={toggleSidenav}
        sx={{
          zIndex: 9999,
        }}
      >
        <MiniCart toggleSidenav={toggleSidenav} />
      </Drawer>

    </Fragment>
  );
}
