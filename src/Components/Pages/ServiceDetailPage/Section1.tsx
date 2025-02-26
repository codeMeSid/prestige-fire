import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Logo */}
      <Box sx={{ py: 3 }}>
        <Image
          src="/images/faber-logo.png"
          alt="Faber Logo"
          width={150}
          height={50}
        />
      </Box>

      {/* Background Image with Overlapping Section */}
      <Box sx={{ position: "relative" }}>
        <Image
          src="/images/faber-banner.jpg" // Replace with actual image path
          alt="Faber Kitchen Chimney"
          width={1920}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />

        {/* Overlapping Section */}
        <Box
          sx={{
            backgroundColor: "#3E565E",
            color: "white",
            py: 6,
            px: 3,
            position: "relative",
            mt: -5,
            zIndex: 10,
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Faber Repair Centre
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
            Expert repair for Faber kitchen appliances.
          </Typography>

          {/* Call to Action Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1E1E1E",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Call Us Now - 18001235871
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
