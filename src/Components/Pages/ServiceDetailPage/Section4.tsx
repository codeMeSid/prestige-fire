"use client";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { siteBrands } from "@sid/src/utils/metadata";
import { useParams } from "next/navigation";
import React from "react";
import CustomImage from "../../CustomImage";

const Section4 = () => {
  const { serviceId } = useParams();
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
        Explore our {siteBrands[serviceId as string].label} kitchen appliance
        repair service images here.
      </Typography>

      {/* Responsive Image Grid */}
      <Container maxWidth="lg">
        <Grid2 container spacing={2} justifyContent="center">
          {siteBrands[serviceId as string].info.galleryImageSrcs.map(
            (image, index) => (
              <Grid2
                key={index}
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  height={400}
                  width="100%"
                  borderRadius={4}
                  overflow="hidden"
                  boxShadow="0px 4px 10px rgba(0,0,0,0.2)"
                >
                  <CustomImage src={image} alt={`Gallery Image ${index + 1}`} />
                </Box>
              </Grid2>
            )
          )}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section4;
