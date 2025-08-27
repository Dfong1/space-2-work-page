import { Fragment } from "react";
import { Heading, StyledLink } from "../styles";
import { ABOUT_LINKS } from "../data"; // ==============================================================
import { Paragraph, Span } from "@/components/Typography";
import { Phone, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";

// ==============================================================
export default function AboutLinks({ isDark }) {
  return (
    <Fragment>
      <Heading>Contáctanos</Heading>

      <div>
        <Box display="flex" alignItems="center" columnGap={1} mb={1.5}>
          <Phone />
            8715200251
        </Box>
        <Box display="flex" alignItems="center" columnGap={1}>
          <WhatsApp />
            8715200251
        </Box>
      </div>
    </Fragment>
  );
}
