import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { siteBrands, siteMetaData } from "@sid/src/utils/metadata";
import React from "react";

const Section3 = () => {
  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Box sx={{ backgroundColor: "#a56a1f", color: "#fff", py: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          {siteMetaData.HomePage.section2.title}
        </Typography>
        <Typography
          component="a"
          href={`tel:${siteMetaData.GlobalLayout.contactBannerText}`}
          variant="h6"
        >
          Call Now -{" "}
          <span style={{ color: "#f4c063" }}>
            {siteMetaData.GlobalLayout.contactBannerText}
          </span>
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" mt={4}>
          {siteMetaData.HomePage.section2.title2}
        </Typography>
        <Typography variant="body1" mb={3}>
          {siteMetaData.HomePage.section2.content2}
        </Typography>
        <Grid2 container spacing={3} justifyContent="center">
          {Object.keys(siteBrands)
            .slice(0, 8)
            .map((brand, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card elevation={3} sx={{ p: 2, textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    image={siteBrands[brand].info.logo}
                    alt={siteBrands[brand].info.name}
                    sx={{ height: 80, objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography variant="body1" fontWeight="bold">
                      {siteBrands?.[brand]?.info?.name}
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
