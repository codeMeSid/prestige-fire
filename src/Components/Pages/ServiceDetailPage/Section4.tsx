import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

const galleryImages = [
  "/images/kitchen1.jpg",
  "/images/kitchen2.jpg",
  "/images/kitchen3.jpg",
  "/images/kitchen4.jpg",
  "/images/kitchen5.jpg",
  "/images/kitchen6.jpg",
];

const Section4 = () => {
  return (
    <Box sx={{ backgroundColor: "#3D5654", py: 6, px: { xs: 2, md: 6 } }}>
      {/* Title Section */}
      <Typography
        variant="h4"
        textAlign="center"
        color="white"
        fontWeight={600}
      >
        Gallery
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="white"
        sx={{ mb: 4 }}
      >
        Explore our Faber kitchen appliance repair service images here.
      </Typography>

      {/* Responsive Image Grid */}
      <Container maxWidth="lg">
        <Grid2 container spacing={2} justifyContent="center">
          {galleryImages.map((image, index) => (
            <Grid2
              key={index}
              size={{
                xs: 12, // Full width on small screens
                md: 6, // 2 columns on tablets
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  objectFit: "cover",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                }}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section4;
