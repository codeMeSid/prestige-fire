import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Burner Repair",
    description:
      "Professional burner repair services for efficient cooking. Contact us for quick assistance and pricing.",
    image: "/images/burner-repair.jpg", // Replace with actual image paths
  },
  {
    title: "Gas Leak Fix",
    description:
      "Safe and reliable gas leak fixes to ensure your home’s safety. Schedule your service now!",
    image: "/images/gas-leak-fix.jpg",
  },
  {
    title:
      "Regular maintenance services to keep your gas stove in top condition. Book your appointment today!",
    description: "Comprehensive Maintenance",
    image: "/images/stove-maintenance.jpg",
  },
];

const Section1 = () => {
  return (
    <Box sx={{ backgroundColor: "#fcefdc", py: 6, textAlign: "center" }}>
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight={600}
        gutterBottom
        sx={{ px: 2, textAlign: "center" }}
      >
        Gas Stove Repair
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 600, mx: "auto", mb: 4, px: 2 }}
      >
        Expert repair services for all gas stove brands in Bangalore and
        Hyderabad. Book your service today!
      </Typography>

      {/* Service Grid */}
      <Grid2
        container
        spacing={4}
        justifyContent="center"
        sx={{ px: { xs: 2, md: 6 } }} // Padding for responsiveness
      >
        {services.map((service, index) => (
          <Grid2
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }} // Stacks on mobile, 2 columns on tablet, 3 on desktop
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                maxWidth: { xs: "100%", sm: 350 },
                width: "100%",
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={350}
                height={230}
                style={{
                  borderRadius: "12px",
                  objectFit: "cover",
                  width: "100%", // Responsive width
                  height: "auto",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ mt: 2, textAlign: "center" }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                textAlign: "center",
                px: { xs: 2, sm: 0 }, // Add padding on small screens
              }}
            >
              {service.description}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Section1;
