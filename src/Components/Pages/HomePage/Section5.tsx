import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const images = [
  "/gas1.jpg",
  "/gas2.jpg",
  "/gas3.jpg",
  "/gas4.jpg",
  "/gas5.jpg",
  "/gas6.jpg",
];

const Section5 = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Gas Stove
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Expert repairs for Elica, Faber, Glen, and more brands.
        </Typography>
      </Box>

      <Grid2 container spacing={2} justifyContent="center" mb={4}>
        {images.map((src, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Image
                src={src}
                alt={`Gas stove ${index + 1}`}
                width={400}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Section5;
