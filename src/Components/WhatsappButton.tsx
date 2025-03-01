import { Button } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { siteMetaData } from "../utils/metadata";

const WhatsappButton = ({ size = "large", rounded = false }) => {
  return (
    <Button
      variant="contained"
      target="_blank"
      href={`${siteMetaData.GlobalLayout.whatsappLink}`}
      sx={{
        width: "max-content",
        alignItems: "center",
        backgroundColor: "#27d365",
        color: "#fff",
        ...(size === "large" ? { px: 4, py: 1.5 } : { px: 4 }),
        ...(rounded ? { borderRadius: "8px" } : {}),
        fontSize: "1rem",
        display: "flex",
        mx: { xs: "auto", md: "0" },
      }}
    >
      <WhatsAppIcon fontSize="small" /> &nbsp; Whatsapp
    </Button>
  );
};

export default WhatsappButton;
