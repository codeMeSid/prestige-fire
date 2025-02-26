import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";

const Section1 = () => {
  return (
    <Container maxWidth="md" sx={{ marginY: 5, marginTop: 10 }}>
      <Grid2 container spacing={4} justifyContent="center">
        {/* Heading Section */}
        <Grid2
          size={{ sm: 12, md: 6 }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {siteMetaData.ContactPage.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {siteMetaData.ContactPage.content}
          </Typography>
        </Grid2>

        {/* Form Section */}
        <Grid2 size={{ sm: 12, md: 6 }}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 3,
              borderRadius: 4,
              boxShadow: 3,
              bgcolor: "background.paper",
            }}
          >
            <TextField label="Your First Name" variant="filled" fullWidth />
            <TextField label="Phone No*" variant="filled" fullWidth required />
            <TextField
              label="Your Email Address*"
              type="email"
              variant="filled"
              fullWidth
              required
            />
            <TextField
              label="Your Message*"
              variant="filled"
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#D16631",
                color: "white",
                "&:hover": { bgcolor: "#B65529" },
                borderRadius: "30px",
                fontWeight: "bold",
                py: 1.5,
                fontSize: "1rem",
              }}
              fullWidth
            >
              Submit Your Request
            </Button>
          </Box>
        </Grid2>

        {/* Image Section */}
        {/* <Grid2 size={{ sm: 10, md: 8 }}>
          <Box borderRadius={3} overflow="hidden">
            <Image
              src="/contact-image.jpg" // Replace with actual image path
              alt="Gas stove repair"
              width={800}
              height={400}
              style={{ borderRadius: "12px", width: "100%", height: "auto" }}
            />
          </Box>
        </Grid2> */}
      </Grid2>
    </Container>
  );
};

export default Section1;
