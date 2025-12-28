import { Box, Button } from "@mui/material";
import { forwardRef } from "react";

interface NavbarMenuProps {
  isOpen: boolean;
}

const baseNavbarMenuStyles = {
  position: "absolute",
  top: "100%",
  right: "0px",
  display: { xs: "flex", sm: "none" },
  flexDirection: "column",
  gap: "8px",
  backgroundColor: "white",
  boxShadow: "-4px 4px 6px rgba(0,0,0,0.1)",
  border: "2px solid #D9D9D9",
  borderRadius: "4px",
  padding: "8px",
  width: "50%",
  zIndex: 1000,
  transition: "transform 0.3s ease-in-out",
};

const NavbarMenu = forwardRef<HTMLDivElement, NavbarMenuProps>(
  function NavbarMenu({ isOpen }, ref) {
    const navbarMenuStyles = {
      ...baseNavbarMenuStyles,
      transform: isOpen ? "translateX(0)" : "translateX(calc(100% + 20px))",
    };

    return (
      <Box ref={ref} sx={navbarMenuStyles}>
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
);

export default NavbarMenu;
