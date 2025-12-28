import { Box, Button, Typography } from "@mui/material";

const LeftBox = () => {
  return (
    <Box sx={{ bgcolor: "white", m: 2, p: 2, width: "50%", borderRadius: "10px" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        More than 20 lakhs Indians trust
      </Typography>
      <Button variant="contained" sx={{ bgcolor: "#0051FF" }}>
        Register Now
      </Button>
    </Box>
  );
};

export default LeftBox;
