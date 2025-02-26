import { Facebook, Instagram, X } from "@mui/icons-material";
import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

const FooterLayout = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#1E1A17", color: "white", py: 6, px: 4 }}
    >
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* Support Section */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Support
          </Typography>
          <Typography variant="body2">
            Expert gas stove repair in Bangalore and Hyderabad.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
              mt: 1,
            }}
          >
            <Facebook fontSize="large" />
            <Instagram fontSize="large" />
            <X fontSize="large" />
          </Box>
        </Grid2>

        {/* Brands Section */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            BRANDS
          </Typography>
          <Typography variant="body2">
            <a
              href="mailto:gasstovecare@gmail.com"
              style={{ color: "white", textDecoration: "underline" }}
            >
              gasstovecare@gmail.com
            </a>
          </Typography>
          <Typography variant="body2">18001235871</Typography>
        </Grid2>

        {/* Contact Section */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            CONTACT
          </Typography>
          <Typography variant="body2">Enter your email address</Typography>
          <TextField
            fullWidth
            placeholder="Your email for updates"
            variant="outlined"
            sx={{
              bgcolor: "white",
              borderRadius: "5px",
              "& input": { color: "black" },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#D1683D",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#B35432" },
            }}
          >
            Book your service now
          </Button>
        </Grid2>
      </Grid2>

      {/* Copyright */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="body2">© 2024. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default FooterLayout;
