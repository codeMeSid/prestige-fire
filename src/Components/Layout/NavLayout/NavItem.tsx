"use client";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  label: string;
  href: string;
  subMenuItems?: { label: string; href: string }[];
}

const NavItem = (props: Props) => {
  const path = usePathname();
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);
  const router = useRouter();
  const { label, href, subMenuItems = [] } = props;
  const hasSubMenu = subMenuItems?.length > 0;
  return (
    <Box
      onMouseEnter={(e) => hasSubMenu && setAnchor(e.currentTarget)}
      onMouseLeave={() => hasSubMenu && setAnchor(null)}
      onClick={() => router.push(href)}
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
        <>
          <ArrowDropDownIcon
            sx={{
              transform: `rotate(${!!anchor ? 180 : 0}deg)`,
              transition: "transform 0.2s ease-in-out",
            }}
          />
          <Menu
            anchorEl={anchor}
            open={!!anchor}
            sx={{ top: 10 }}
            onClose={() => setAnchor(null)}
          >
            {subMenuItems.map((item) => (
              <MenuItem
                key={item.href}
                component={Link}
                href={item.href}
                sx={{ width: 160 }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </Box>
  );
};

export default NavItem;
