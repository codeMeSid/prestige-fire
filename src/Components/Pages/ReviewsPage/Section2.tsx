import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    title:
      "Expert Gas Stove Repair Services in Bangalore and Hyderabad You Can Trust",
    description:
      "Gas Stove Care offers modern, reliable repair services for top brands like Elica, Faber, and more. Our user-friendly website makes booking easy. Explore burner repairs, gas leak fixes, and customer testimonials to ensure you receive the best service in Bangalore and Hyderabad. Book your service today!",
    date: "5/8/2024",
    readTime: "1 min read",
    imageSrc: "/images/stove-repair-1.jpg", // Replace with actual paths
    altText: "A woman using a gas stove",
  },
  {
    id: 2,
    title: "Expert Gas Stove Repair Services in Bangalore and Hyderabad",
    description:
      "Discover top-notch gas stove repair services for brands like Elica, Faber, and Bosch. Our user-friendly website makes booking easy. Enjoy reliable repairs for your gas stoves in Bangalore and Hyderabad. Trust our expertise to ensure your stove operates safely and efficiently. Book your service today!",
    date: "5/8/2024",
    readTime: "1 min read",
    imageSrc: "/images/stove-fire.jpg", // Replace with actual paths
    altText: "A stove on fire",
  },
];

const Section2 = () => {
  return (
    <Grid2 container spacing={4} justifyContent="center" sx={{ my: 10, px: 3 }}>
      {services.map((service) => (
        <Grid2 key={service.id} size={{ xs: 12, md: 6 }}>
          <Card
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
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
  );
};

export default Section2;
