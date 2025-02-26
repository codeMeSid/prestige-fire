"use client";
import { Box, Button, Typography } from "@mui/material";
import { siteBrands, siteMetaData } from "@sid/src/utils/metadata";
import { useParams } from "next/navigation";
import CustomImage from "../../CustomImage";

const Section1 = () => {
  const { serviceId } = useParams();
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Logo */}
      <Box
        sx={{
          my: 5,
          mx: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box width={150} height={50}>
          <CustomImage
            src={siteBrands[serviceId as string].info.logo}
            alt={siteBrands[serviceId as string].label}
          />
        </Box>
      </Box>

      {/* Background Image with Overlapping Section */}
      <Box sx={{ position: "relative" }}>
        <Box height={300} width="100%">
          <CustomImage
            src={siteBrands[serviceId as string].info.heroImageSrc}
            alt={serviceId as string}
          />
        </Box>

        {/* Overlapping Section */}
        <Box
          sx={{
            backgroundColor: siteBrands[serviceId as string].info.panelBgColor,
            color: "white",
            py: 6,
            px: 3,
            position: "relative",
            mt: -5,
            zIndex: 10,
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            {siteBrands[serviceId as string].label} Repair Centre
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
            Expert repair for {siteBrands[serviceId as string].label} kitchen
            appliances.
          </Typography>

          {/* Call to Action Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1E1E1E",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            Call Us Now - {siteMetaData.GlobalLayout.contactBannerText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
