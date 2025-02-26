import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import Image from "next/image";

//

const Section2 = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid2 container spacing={4} alignItems="center">
        {/* Left Content */}
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {siteMetaData.HomePage.section1.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {siteMetaData.HomePage.section1.content}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFA500",
              color: "#000",
              mt: 2,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              display: "block",
              mx: { xs: "auto", md: "0" },
            }}
          >
            Call Now - {siteMetaData.GlobalLayout.contactBannerText}
          </Button>
        </Grid2>

        {/* Right Image & Testimonial */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              maxWidth: "100%",
              textAlign: "center",
            }}
          >
            <Image
              src={siteMetaData.HomePage.section1.heroImageSrc} // Replace with actual image path
              alt="Gas Stove Burner"
              width={600} // Adjust as needed
              height={400} // Adjust as needed
              style={{ width: "100%", height: "auto", borderRadius: "16px" }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "#FFE8C5",
                p: 2,
                textAlign: "left",
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                {siteMetaData.HomePage.section1.heroImageTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {siteMetaData.HomePage.section1.heroImageSubtitle}
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Section2;
