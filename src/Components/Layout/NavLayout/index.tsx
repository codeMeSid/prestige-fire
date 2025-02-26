"use client";
import { Box, Button } from "@mui/material";
import {
  SITE_CONTACT_BG_COLOR,
  SITE_CONTACT_NUMBER,
  SITE_NAV_LIST,
} from "@sid/src/utils/info";
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
      {SITE_NAV_LIST.map((i) => {
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
        href={`tel:${SITE_CONTACT_NUMBER}`}
        sx={{ bgcolor: SITE_CONTACT_BG_COLOR, height: 52, width: 166 }}
      >
        call us now
      </Button>
    </Box>
  );
};

export default NavLayout;
