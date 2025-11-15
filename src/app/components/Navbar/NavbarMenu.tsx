import { Box, Button } from "@mui/material";

export default function NavbarMenu() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        right: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "4px",
        padding: "8px",
        minWidth: "120px",
        zIndex: 1000,
      }}
    >
      <Button
        variant="contained"
        sx={{ backgroundColor: "#0051FF", width: "100%" }}
      >
        Login
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#0051FF", width: "100%" }}
      >
        Signup
      </Button>
    </Box>
  );
}
