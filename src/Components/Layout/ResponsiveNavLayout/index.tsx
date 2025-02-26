"use client";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import { useState } from "react";
import NavItem from "../NavLayout/NavItem";

const ResponsiveNavLayout = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          {/* Close Icon */}
          <IconButton
            size="small"
            onClick={toggleDrawer(false)}
            sx={{ position: "absolute", right: 10, top: 10 }}
          >
            <Close />
          </IconButton>

          {/* Menu Items */}
          <List sx={{ marginTop: 5 }}>
            {siteMetaData.SiteNav.map((i) => {
              return (
                <ListItem key={i.href} onClick={toggleDrawer(false)}>
                  <NavItem
                    href={i.href}
                    label={i.label}
                    subMenuItems={i.subnav}
                  />
                </ListItem>
              );
            })}
          </List>

          <Divider sx={{ marginY: 2 }} />

          {/* Call Us Button */}
          <Box mx={2}>
            <Button
              variant="contained"
              href={`tel:${siteMetaData.GlobalLayout.contactBannerText}`}
              sx={{
                bgcolor: siteMetaData.GlobalLayout.contactBannerBgColor,
                width: "100%",
              }}
            >
              Call Us Now
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ResponsiveNavLayout;
