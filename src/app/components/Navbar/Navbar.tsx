import { Typography, Box } from "@mui/material";
import NavbarClient from "./NavbarClient";

const navbarStyles = {
  height: { xs: "50px", sm: "70px" },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#0051FF",
  boxShadow: "0 6px 8px rgba(0,0,0,0.1)",
  padding: "0px 10px",
  position: "relative",
};

const Navbar = () => {
  return (
    <Box component="nav" sx={navbarStyles}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", fontSize: { xs: "30px", sm: "40px" } }}
      >
        MyJob
      </Typography>

      <NavbarClient />
    </Box>
  );
};

export default Navbar;
