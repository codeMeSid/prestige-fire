import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <Container maxWidth="lg">
      <Grid2
        container
        spacing={4}
        justifyContent="center"
        sx={{ my: 10, px: 3 }}
      >
        {siteMetaData.ReviewsPage.services.map((service) => (
          <Grid2 key={service.id} size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                bgcolor: "transparent",
                boxShadow: "none",
              }}
            >
              <CardMedia>
                <Image
                  src={service.imageSrc}
                  alt={service.altText}
                  width={500}
                  height={300}
                  style={{ objectFit: "cover", width: "100%", height: "250px" }}
                />
              </CardMedia>
              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                  sx={{ flexGrow: 1 }}
                >
                  {service.description}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  mt={2}
                  color="text.secondary"
                >
                  {service.date} · {service.readTime}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Section2;
