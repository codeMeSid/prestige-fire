import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "Brand Expertise",
    description:
      "We specialize in repairing top brands like Elica, Faber, Glen, and more.",
    imageUrl: "/images/burner-image-1.jpg", // Replace with actual image
    alt: "Gas stove burner",
  },
  {
    title: "Customer Trust",
    description:
      "Read testimonials from satisfied customers who trust our gas stove repair services.",
    imageUrl: "/images/burner-image-2.jpg", // Replace with actual image
    alt: "Blue flame burner",
  },
];

const Section2 = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        {/* Page Title */}
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Gas Stove Repair
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
          Expert repair services for your gas stove in Bangalore and Hyderabad.
        </Typography>

        {/* Loop through Sections */}
        {sections.map((section, index) => (
          <Grid2
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            key={index}
            sx={{ mb: 6 }}
          >
            {/* Left Side - Image */}
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={section.imageUrl}
                  alt={section.alt}
                  width={500}
                  height={300}
                  style={{
                    borderRadius: "12px",
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </Grid2>

            {/* Right Side - Text */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" fontWeight={600}>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {section.description}
              </Typography>
            </Grid2>
          </Grid2>
        ))}
      </Box>
    </Container>
  );
};

export default Section2;
