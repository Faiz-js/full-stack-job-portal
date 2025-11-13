import { Typography, Box, Button } from "@mui/material";

export default function Navbar() {
  return (
    <nav
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#0051FF",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        padding: "0px 10px"
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold"}}>MyJob</Typography>

      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button variant="contained" sx={{ backgroundColor: "#0051FF" }}>
          Login
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#0051FF" }}>
          Signup
        </Button>
      </Box>
    </nav>
  );
}
