import { Box, Container, Typography } from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import { PropsWithChildren } from "react";
import CustomImage from "../CustomImage";
import FooterLayout from "./FooterLayout";
import NavLayout from "./NavLayout";
import ResponsiveNavLayout from "./ResponsiveNavLayout";

const AppLayout = (props: PropsWithChildren) => {
  return (
    <Box height="100%">
      <Box
        padding={1.5}
        sx={{
          color: "white",
          textAlign: "center",
          background: siteMetaData.GlobalLayout.contactBannerBgColor,
        }}
      >
        <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
          CALL US NOW - {siteMetaData.GlobalLayout.contactBannerText}
        </Typography>
      </Box>
      <Box sx={{ background: "#ffffff", padding: 1 }}>
        <Container
          disableGutters
          maxWidth="lg"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="a"
            href="/"
            height={{ xs: 68, sm: 68, md: 68, lg: 98, xl: 98 }}
            width={{ xs: 89, sm: 89, md: 89, lg: 116, xl: 116 }}
          >
            <CustomImage
              src={siteMetaData.GlobalLayout.siteLogoSrc}
              alt="site logo"
            />
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <NavLayout />
            <ResponsiveNavLayout />
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
