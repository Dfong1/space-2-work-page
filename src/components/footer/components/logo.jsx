import { Fragment } from "react";
import Link from "next/link";
import SocialLinks from "./social-links";
import Image from "@/components/BazaarImage";
import { Paragraph } from "@/components/Typography";
import { Box } from "@mui/material";
export default function LogoSection() {
  return (
    <Fragment>
      <Box display="flex" marginLeft={-1} columnGap={0.5} alignItems="center">
        {/* <Link href="/">
          <Image
            width="100px"
            src="/images/logo2.jpg"
            alt="logo"
          />
        </Link> */}
        <Box>
          <Paragraph size={25} color="grey.500">
            Texto
          </Paragraph>
          <Paragraph fontSize={10} mb={2} color="grey.500">
            ©  2025 Space 2 Work
          </Paragraph>
        </Box>
      </Box>
      {/* <SocialLinks /> */}
    </Fragment>
  );
}
