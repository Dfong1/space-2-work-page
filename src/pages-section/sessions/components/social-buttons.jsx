import { Fragment } from "react";
import Image from "next/image"; // MUI

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider"; // CUSTOM COMPONENTS

import { Span } from "@/components/Typography"; // IMPORT IMAGES

// =======================================
export default function SocialButtons(props) {
  return (
    <Fragment>
      {/* DIVIDER */}
      <Box my={3}>
        <Divider></Divider>
      </Box>
    </Fragment>
  );
}
