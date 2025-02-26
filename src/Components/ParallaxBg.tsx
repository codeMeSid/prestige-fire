"use client";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  src: string;
  height?: number;
}

const ParallaxBg = (props: PropsWithChildren<Props>) => {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        width: "100%",
        minHeight: "400px",
        height: theme.spacing(props?.height || "50"),
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        fontSize: "2rem",
        fontWeight: "bold",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${props.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -1,
        },
      })}
    >
      {props.children}
    </Box>
  );
};

export default ParallaxBg;
