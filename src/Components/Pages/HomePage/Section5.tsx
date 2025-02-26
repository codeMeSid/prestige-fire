import { Box, Container, Grid2, Typography } from "@mui/material";
import { siteMetaData } from "@sid/src/utils/metadata";
import CustomImage from "../../CustomImage";

const Section5 = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          {siteMetaData.HomePage.section4.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {siteMetaData.HomePage.section4.content}
        </Typography>
      </Box>

      <Grid2 container spacing={2} justifyContent="center" mb={4}>
        {siteMetaData.HomePage.section4.imageList.map((src, index) => (
          <Grid2
            key={index}
            display="flex"
            justifyContent="center"
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <Box
              width={400}
              height={400}
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CustomImage src={src} alt={`Gas stove ${index + 1}`} />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Section5;
