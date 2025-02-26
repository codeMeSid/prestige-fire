import { Box } from "@mui/material";

import Section1 from "@sid/src/Components/Pages/ServiceDetailPage/Section1";
import Section2 from "@sid/src/Components/Pages/ServiceDetailPage/Section2";
import Section3 from "@sid/src/Components/Pages/ServiceDetailPage/Section3";
import Section4 from "@sid/src/Components/Pages/ServiceDetailPage/Section4";
import { siteBrands } from "@sid/src/utils/metadata";
import React from "react";

export async function generateStaticParams() {
  // Define all possible service IDs
  const serviceIds = Object.keys(siteBrands);

  return serviceIds.map((id) => ({ serviceId: id }));
}

const ServiceDetailPage = () => {
  return (
    <Box>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Box>
  );
};

export default ServiceDetailPage;
