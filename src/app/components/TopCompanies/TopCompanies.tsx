import { Box, Button, Typography } from "@mui/material";
import CompanyCard from "./CompanyCard";

const companiesCard = [
  {
    id: 1,
    icon: "uber icon",
    text: "Uber",
  },
  {
    id: 2,
    icon: "google icon",
    text: "Google",
  },
  {
    id: 3,
    icon: "microsoft icon",
    text: "Microsoft",
  },
  {
    id: 4,
    icon: "apple icon",
    text: "Apple",
  },
  {
    id: 5,
    icon: "samsung icon",
    text: "Samsung",
  },
];

const TopCompanies = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ bgcolor: "#B0CEFF", py: 5, borderRadius: "10px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4">Top companies hiring now</Typography>

          <CompanyCard companiesCard={companiesCard} />

          <Button variant="contained" sx={{ bgcolor: "#0051FF" }}>
            Show more companies
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TopCompanies;
