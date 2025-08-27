import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENT

import LogoSection from "./components/logo";
import AboutLinks from "./components/about-links";
import SocialLinks from "./components/social-links";
import CustomerCareLinks from "./components/customer-care-links"; // GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "@/components/Typography"; // STYLED COMPONENTS

import { Heading, StyledLink } from "./styles";
import { Divider } from "@mui/material";
export default function Footer1() {
  return (
    <Box
      component="footer"
      bgcolor="#000000"
      mb={{
        sm: 0,
        xs: 7,
      }}
    >
      <Box
        component={Container}
        color="white"
        overflow="hidden"
        py={{
          sm: 10,
          xs: 4,
        }}
      >
        <Grid container spacing={3}>
          {/* CUSTOMER CARE LINKS */}
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <CustomerCareLinks />
          </Grid>
          {/* ABOUT US LINKS */}
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <AboutLinks />
          </Grid>
          {/* CONTACT & SOCIAL LINKS */}
            {/* CONTACT INFORMATION */}
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Heading>Marcas</Heading>
          </Grid>


          <Grid item lg={3} md={6} sm={6} xs={12}>
            Ubicacion (Google maps)
          </Grid>


        </Grid>
        <Divider color="#ffffff" sx={{marginTop: 10, marginBottom: 5}} />
          <Box display="flex" justifyContent="center" alignItems="center">
            2025 Space 2 Work
          </Box>
      </Box>
    </Box>
  );
}
