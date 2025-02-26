import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";

const Section2 = () => {
  return (
    <Box sx={{ p: 4, mb: 2 }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* Text Content */}
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ marginTop: 2 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Reach out for gas stove repair services in Bangalore and
              Hyderabad. We're here to help you with all your gas stove needs.
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Location
            </Typography>
            <Typography variant="body1">Bangalore and Hyderabad</Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Hours
            </Typography>
            <Typography variant="body1">9 AM - 6 PM</Typography>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773386.98396428!2d72.57974239876822!3d12.971598315761922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d4b49c4b%3A0x804cb6bb46d7923e!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1615825445965!5m2!1sen!2sin"
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section2;
