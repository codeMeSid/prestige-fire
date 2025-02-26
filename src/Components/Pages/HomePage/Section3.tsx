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

const brands = [
  { name: "Elica Kitchen Services", logo: "/images/elica.png" },
  { name: "Faber Kitchen Services", logo: "/images/faber.png" },
  { name: "Glen Kitchen Services", logo: "/images/glen.png" },
  { name: "Gilma Kitchen Services", logo: "/images/gilma.png" },
  { name: "Hafele Kitchen Services", logo: "/images/hafele.png" },
  { name: "Siemens Kitchen Services", logo: "/images/siemens.png" },
  { name: "Bosch Kitchen Services", logo: "/images/bosch.png" },
  { name: "Hindware Kitchen Services", logo: "/images/hindware.png" },
];

const Section3 = () => {
  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Box sx={{ backgroundColor: "#a56a1f", color: "#fff", py: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Looking for Expert Technicians for Kitchen products Repairs and
          Services?
        </Typography>
        <Typography variant="h6">
          Call Now - <span style={{ color: "#f4c063" }}>18001235871</span>
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" mt={4}>
          Our Brand Services
        </Typography>
        <Typography variant="body1" mb={3}>
          Provide high quality brand repairs and services by our expert
          technicians.
        </Typography>
        <Grid2 container spacing={3} justifyContent="center">
          {brands.map((brand, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card elevation={3} sx={{ p: 2, textAlign: "center" }}>
                <CardMedia
                  component="img"
                  image={brand.logo}
                  alt={brand.name}
                  sx={{ height: 80, objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    {brand.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Section3;
