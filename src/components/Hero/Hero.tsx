import { Box, Typography } from "@mui/material";
import Search from "@/components/common/Search/Search";

const heroSectionStyling = {
  height: "90vh",
  backgroundColor: "#B0CEFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
};

const Hero = () => {
  return (
    <Box sx={heroSectionStyling}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "semibold",
          textAlign: "center",
          fontSize: { xs: "45px", md: "70px" },
        }}
      >
        Find your dream job now
      </Typography>
      <Typography variant="h4" sx={{ textAlign: "center", fontSize: "30px", mb: "30px" }}>
        1 lakh+ job for you to explore
      </Typography>

      <Search />
    </Box>
  );
};

export default Hero;
