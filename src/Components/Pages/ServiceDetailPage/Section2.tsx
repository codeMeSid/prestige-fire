"use client";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { siteBrands } from "@sid/src/utils/metadata";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Section2 = () => {
  const { serviceId } = useParams();
  return (
    <Box sx={{ backgroundColor: "#E6F4F9", py: 6, px: 3 }}>
      {/* Heading & Button */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight={600}>
          {siteBrands[serviceId as string].label} Repair Services
        </Typography>
        <Typography variant="body1" sx={{ my: 1 }}>
          Contact us for{" "}
          <strong>
            {siteBrands[serviceId as string].label} Customer Support
          </strong>{" "}
          Near you.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6CB6C8",
            color: "white",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            "&:hover": { backgroundColor: "#5AA2B3" },
          }}
        >
          Contact For Service
        </Button>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg">
        <Grid2 container spacing={4} alignItems="center">
          {/* Left - Image */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={siteBrands[serviceId as string].info.heroImageSrc2} // Replace with actual path
                alt="Faber Kitchen Chimney"
                width={600}
                height={400}
                style={{ borderRadius: 10, width: "100%", height: "auto" }}
              />
            </Box>
          </Grid2>

          {/* Right - Repair Services List */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box>
              {siteBrands[serviceId as string].info.contents.map(
                (content, contentIndex) => {
                  return (
                    <React.Fragment key={contentIndex}>
                      <Typography variant="h6" fontWeight={600}>
                        {content.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {content.content}
                      </Typography>
                    </React.Fragment>
                  );
                }
              )}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section2;
