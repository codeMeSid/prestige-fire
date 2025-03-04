"use client";
import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { siteBrands, siteMetaData } from "@sid/src/utils/metadata";
import { useParams } from "next/navigation";
import React from "react";

const Section3 = () => {
  const { serviceId } = useParams();
  return (
    <Box sx={{ backgroundColor: "#F9FAFB", py: 6, px: 3 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4} alignItems="center">
          {/* Left Section - Contact Info */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight={600}>
              {siteBrands[serviceId as string].label} Kitchen Repair Services
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
              Contact our {siteBrands[serviceId as string].label} kitchen repair
              service center at{" "}
              <strong>{siteMetaData.GlobalLayout.contactBannerText}</strong> for
              assistance with your kitchen appliances. We’re here to help you!
            </Typography>
            <Typography variant="h6" fontWeight={600}>
              Call Us
            </Typography>
            <Typography
              component="a"
              href={`tel:${siteMetaData.GlobalLayout.contactBannerText}`}
              variant="body1"
              sx={{ fontWeight: 600, color: "#333" }}
            >
              {siteMetaData.GlobalLayout.contactBannerText}
            </Typography>
          </Grid2>

          {/* Right Section - Contact Form */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                fullWidth
                label="Your First Name"
                placeholder="Enter your first name"
              />
              <TextField
                fullWidth
                label="Your Phone Number*"
                placeholder="Your Phone Number"
                required
              />
              <TextField
                fullWidth
                label="Your Email Address*"
                placeholder="Enter your email address"
                required
              />
              <TextField
                fullWidth
                label="Your Message*"
                placeholder="Describe your issue here"
                multiline
                rows={4}
                required
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1769aa",
                  color: "white",
                  py: 1.5,
                  fontSize: "1rem",
                }}
              >
                Submit Your Request
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section3;
