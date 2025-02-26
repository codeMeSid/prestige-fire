import { Box, Container, Grid2, Typography } from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import React from "react";

const Section2 = () => {
  return (
    <Box sx={{ p: 4, mb: 2 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* Text Content */}
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ marginTop: 2 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {siteMetaData.ContactPage.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {siteMetaData.ContactPage.content2}
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Location
            </Typography>
            <Typography variant="body1">
              {siteMetaData.ContactPage.content3}
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Hours
            </Typography>
            <Typography variant="body1">
              {siteMetaData.ContactPage.content4}
            </Typography>
          </Grid2>

          {/* Google Map Embed */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", md: "350px" },
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 2,
              }}
            >
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={siteMetaData.ContactPage.mapSrc}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section2;
