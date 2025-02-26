import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Section1 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "100vh", md: "80vh" }, // Adjust height based on screen size
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1608454770647-01dc0f7dd97d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Replace with actual image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Parallax effect
          filter: "brightness(0.7)", // Dark overlay effect
        }}
      />

      {/* Main Heading & Call to Action */}
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold">
          Expert Gas Stove Repair Services
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Reliable repairs for Elica, Faber, Glen, and more.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "orange",
            color: "black",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#e69500" },
          }}
        >
          Call Now - 18001235871
        </Button>
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
        {[
          {
            title: "Burner Repair",
            desc: "Quick and efficient burner repair services available.",
          },
          { title: "Brand Expertise", desc: "Gas Leak Fixes" },
          {
            title: "Trusted Brands",
            desc: "Professional solutions for all gas leak issues.",
          },
        ].map((item, index) => (
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
            <Typography variant="body2">{item.desc}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Section1;
