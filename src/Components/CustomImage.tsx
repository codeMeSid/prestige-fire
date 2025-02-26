"use client";
import { Box, Skeleton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  objectFit?: "contain" | "cover" | "fill" | "none";
}

const CustomImage = (props: Props) => {
  const { objectFit = "cover" } = props;
  const [loading, setLoading] = useState(true);

  return (
    <Box
      sx={{
        overflow: "hidden",
        bgcolor: "transparent",
        background: "transparent",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      {loading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: "absolute", top: 0, left: 0 }}
        />
      )}

      <Image
        fill
        priority
        src={props.src}
        alt={props.alt}
        sizes="100%"
        style={{
          objectFit,
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
        onLoad={() => setLoading(false)}
      />
    </Box>
  );
};

export default CustomImage;
