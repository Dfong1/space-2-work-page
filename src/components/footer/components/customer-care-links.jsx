import { Fragment } from "react";
import { Heading, StyledLink } from "../styles";
import { CUSTOMER_CARE_LINKS } from "../data"; // ==============================================================

// ==============================================================
export default function CustomerCareLinks({ isDark }) {
  return (
    <Fragment>
      <Heading>Menú</Heading>

      <StyledLink isDark={isDark} href="/">
        Inicio
      </StyledLink>
    </Fragment>
  );
}
