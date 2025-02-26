import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";

const services = [
  {
    title: "Burner Repair",
    description:
      "Professional burner repair services for all major brands including Elica, Faber, and Glen.",
    image: "/images/burner-repair.jpg",
  },
  {
    title: "Gas Leak Fix",
    description:
      "Expert solutions for gas leaks, ensuring safety and efficiency for your home appliances.",
    image: "/images/gas-leak-fix.jpg",
  },
  {
    title: "Maintenance Services",
    description:
      "Comprehensive maintenance services for your gas stoves, enhancing performance and longevity.",
    image: "/images/maintenance-services.jpg",
  },
];

const Section4 = () => {
  return (
    <Box sx={{ backgroundColor: "#ffeacd" }}>
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" align="center">
          Expert Gas Repair
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Reliable gas stove repair services in Bangalore and Hyderabad. Book
          your service today!
        </Typography>

        <Grid2 container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section4;
