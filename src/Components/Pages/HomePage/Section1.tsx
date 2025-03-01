import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import React from "react";
import WhatsappButton from "../../WhatsappButton";

const Section1 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "100vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url(${siteMetaData.HomePage.parallaxImageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Parallax effect
          filter: "brightness(0.7)", // Dark overlay effect
        }}
      />

      {/* Main Heading & Call to Action */}
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold">
          {siteMetaData.HomePage.parallaxImageTitle1}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {siteMetaData.HomePage.parallaxImageTitle2}
        </Typography>
        <Grid2 container sx={{ mt: 3 }} spacing={1}>
          <Grid2
            size={{ xs: 12, md: 6 }}
            textAlign={{ xs: "center", md: "right" }}
          >
            <Button
              variant="contained"
              href={`tel:${siteMetaData.GlobalLayout.contactBannerText}`}
              sx={{
                backgroundColor: "#ED9D7A",
                color: "black",
                fontWeight: "bold",
                borderRadius: "8px",
                height: 40,
              }}
            >
              Call Now - {siteMetaData.GlobalLayout.contactBannerText}
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <WhatsappButton rounded size="small" />
          </Grid2>
        </Grid2>
      </Container>

      {/* Feature Boxes */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack vertically on xs/sm, horizontal on md+
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: 2,
          mt: { xs: 5, md: 8 },
          px: { xs: 2, md: 5 },
        }}
      >
        {siteMetaData.HomePage.parallaxSections.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 30%" }, // Full width on small, 30% width on large screens
              minWidth: "250px",
              p: 2,
              py: 4,
              backgroundColor: "#ffffff10",
              borderRadius: "8px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section1;
