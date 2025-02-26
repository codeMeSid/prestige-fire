import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <Box sx={{ backgroundColor: "#E6F4F9", py: 6, px: 3 }}>
      {/* Heading & Button */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight={600}>
          Faber Repair Services
        </Typography>
        <Typography variant="body1" sx={{ my: 1 }}>
          Contact us for <strong>Faber Customer Support</strong> Near you.
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
                src="/images/faber-repair-banner.jpg" // Replace with actual path
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
              <Typography variant="h6" fontWeight={600}>
                Cooktop Repair
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Specialized repair services for Faber cooktops. We ensure your
                appliance works perfectly.
              </Typography>

              <Typography variant="h6" fontWeight={600}>
                Gas Stove Repair
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Professional repair for Faber gas stoves. Quick and reliable
                service guaranteed.
              </Typography>

              <Typography variant="h6" fontWeight={600}>
                Hob Repair Services
              </Typography>
              <Typography variant="body2">
                Efficient repairs for Faber kitchen hobs. Contact us for fast
                solutions.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section2;
