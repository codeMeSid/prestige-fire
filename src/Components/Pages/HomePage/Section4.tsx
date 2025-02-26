import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import React from "react";

const Section4 = () => {
  return (
    <Box sx={{ backgroundColor: "#ffeacd" }}>
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" align="center">
          {siteMetaData.HomePage.section3.title}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          {siteMetaData.HomePage.section3.content}
        </Typography>

        <Grid2 container spacing={4} justifyContent="center">
          {siteMetaData.HomePage.section3.servicesList.map((service, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  bgcolor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ bgcolor: "transparent" }}>
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
