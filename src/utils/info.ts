import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export const SITE_CONTACT_NUMBER = 18001235871;
export const SITE_FOOTER_RIGHTS_Text = "© 2024. All rights reserved.";
export const SITE_CONTACT_BG_COLOR = "#3226ed";
export const SITE_FOOTER_BG_COLOR = "#221e1b";
export const SITE_LOGO_SRC =
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=232,fit=crop,q=95/A85Er13l6yT19Lvr/whatsapp-image-2025-01-09-at-11.21.04-pm-AQEDV2vegOHZ0O7v.jpeg";
export const SITE_FOOTER_SUPPORT_TITLE = "Support";
export const SITE_SOCIAL_MEDIA_LIST = [
  { icon: FacebookIcon, href: "https://facebook.com" },
  { icon: InstagramIcon, href: "https://instagram.com" },
  { icon: XIcon, href: "https://x.com" },
];
export const SITE_BRAND_LIST: Record<
  string,
  { label: string; info: Record<string, unknown> }
> = {
  elica: {
    label: "Elica",
    info: {},
  },
};
export const SITE_NAV_LIST = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    subnav: Object.keys(SITE_BRAND_LIST).map((s) => ({
      label: SITE_BRAND_LIST[s].label,
      href: `/services/${s}`,
    })),
  },
  { label: "Contact", href: "/contact" },
  { label: "Reviews", href: "/reviews" },
];
