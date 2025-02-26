"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  label: string;
  href: string;
  subMenuItems?: { label: string; href: string }[];
}

const ResponsiveNavItem = (props: Props) => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { label, href, subMenuItems = [] } = props;
  const hasSubMenu = subMenuItems?.length > 0;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          textDecoration: path === href ? "underline" : "none",
          textUnderlineOffset: 8,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        {/* Main navigation item should be clickable */}

        <Typography
          component="a"
          href={href}
          sx={{ fontSize: 16, fontWeight: 500 }}
          onClick={() => router.push(href)}
        >
          {label}
        </Typography>

        {hasSubMenu && (
          <IconButton onClick={() => setOpen((prev) => !prev)}>
            <ArrowDropDownIcon
              sx={{
                transform: `rotate(${!!open ? 180 : 0}deg)`,
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </IconButton>
        )}
      </Box>
      <Box
        sx={{
          top: 10,
          overflow: "hidden",
          height: open ? "max-content" : 0,
        }}
      >
        {subMenuItems.map((item) => (
          <MenuItem
            onClick={() => setOpen(false)}
            key={item.href}
            component={Link}
            href={item.href}
            sx={{ width: 160 }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};

export default ResponsiveNavItem;
