"use client";
import { Box, Button } from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import NavItem from "./NavItem";

const NavLayout = () => {
  return (
    <Box
      sx={(theme) => ({
        display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
        height: "100%",
        alignItems: "center",
        gap: theme.spacing(4),
      })}
    >
      {siteMetaData.SiteNav.map((i) => {
        return (
          <NavItem
            key={i.href}
            href={i.href}
            label={i.label}
            subMenuItems={i.subnav}
          />
        );
      })}
      <Button
        variant="contained"
        href={`tel:${siteMetaData.GlobalLayout.contactBannerText}`}
        sx={{
          bgcolor: siteMetaData.GlobalLayout.contactBannerBgColor,
          height: 52,
          width: 166,
        }}
      >
        call us now
      </Button>
    </Box>
  );
};

export default NavLayout;
