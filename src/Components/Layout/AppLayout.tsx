import { Box, Container, Typography } from "@mui/material";
import {
  SITE_CONTACT_BG_COLOR,
  SITE_CONTACT_NUMBER,
  SITE_LOGO_SRC,
} from "@sid/src/utils/info";
import React, { PropsWithChildren } from "react";
import CustomImage from "../CustomImage";
import NavLayout from "./NavLayout";
import FooterLayout from "./FooterLayout";

const AppLayout = (props: PropsWithChildren) => {
  return (
    <Box height="100%">
      <Box
        padding={1.5}
        sx={{
          color: "white",
          textAlign: "center",
          background: SITE_CONTACT_BG_COLOR,
        }}
      >
        <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
          CALL US NOW - {SITE_CONTACT_NUMBER}
        </Typography>
      </Box>
      <Box sx={{ background: "#ffffff", padding: 1 }}>
        <Container disableGutters maxWidth="lg" sx={{ display: "flex" }}>
          <Box
            height={{ xs: 68, sm: 68, md: 68, lg: 98, xl: 98 }}
            width={{ xs: 89, sm: 89, md: 89, lg: 116, xl: 116 }}
          >
            <CustomImage src={SITE_LOGO_SRC} alt="site logo" />
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <NavLayout />
          </Box>
        </Container>
      </Box>
      <Box
        height={{
          xs: "calc(100% - 132px)",
          sm: "calc(100% - 132px)",
          md: "calc(100% - 132px)",
          lg: "calc(100% - 162px)",
          xl: "calc(100% - 162px)",
        }}
        sx={{ overflowY: "scroll", overflowX: "hidden" }}
      >
        <Box>{props.children}</Box>
        <FooterLayout />
      </Box>
    </Box>
  );
};

export default AppLayout;
