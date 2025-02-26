import React from "react";
import { Avatar, Box, Grid2, Rating, Typography } from "@mui/material";
import Image from "next/image";

const Section1 = () => {
  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Grid2
        container
        sx={{
          maxWidth: 600,
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
          bgcolor: "#A65B38",
        }}
      >
        {/* Image Section */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: 612 },
              height: { xs: 320, md: 464 }, // Adjust height based on screen size
            }}
          >
            <Image
              src="/testimonial-image.jpg" // Replace with actual image path
              alt="Testimonial"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Grid2>

        {/* Review Section */}
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 3,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* MUI Rating Component */}
          <Rating value={5} readOnly precision={0.5} sx={{ color: "white" }} />

          {/* Review Text */}
          <Typography variant="body1" color="white" mt={1}>
            Excellent service! My gas stove was repaired quickly and
            efficiently. Highly recommend their expertise.
          </Typography>

          {/* Reviewer Details */}
          <Box mt={2}>
            <Avatar
              src="/ravi-kumar-avatar.jpg" // Replace with actual avatar image
              sx={{ width: 50, height: 50, mx: "auto" }}
            />
            <Typography variant="body2" color="white" mt={1}>
              Ravi Kumar
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Section1;
