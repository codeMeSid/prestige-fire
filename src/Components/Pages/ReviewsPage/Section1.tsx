import { Avatar, Box, Grid2, Rating, Typography } from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import CustomImage from "../../CustomImage";

const Section1 = () => {
  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Grid2
        container
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
          bgcolor: "#A65B38",
        }}
      >
        {/* Image Section */}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 320, md: 464 }, // Adjust height based on screen size
            }}
          >
            <CustomImage
              objectFit="cover"
              src={siteMetaData.ReviewsPage.imageSrc}
              alt="Testimonial"
            />
          </Box>
        </Grid2>

        {/* Review Section */}
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            p: 3,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* MUI Rating Component */}
          <Rating
            value={siteMetaData.ReviewsPage.ratings}
            readOnly
            precision={0.5}
            sx={{ color: "white" }}
          />

          {/* Review Text */}
          <Typography variant="body1" color="white" mt={1}>
            {siteMetaData.ReviewsPage.review}
          </Typography>

          {/* Reviewer Details */}
          <Box mt={2}>
            <Avatar
              src={siteMetaData.ReviewsPage.reviewerImageSrc} // Replace with actual avatar image
              sx={{ width: 50, height: 50, mx: "auto" }}
            />
            <Typography variant="body2" color="white" mt={1}>
              {siteMetaData.ReviewsPage.reviewerName}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Section1;
