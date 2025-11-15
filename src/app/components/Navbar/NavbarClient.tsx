"use client";

import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavbarMenu from "./NavbarMenu";

export default function NavbarClient() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  console.log(isMenuClicked);

  return (
    <>
      {/* hide buttons on mobile devices and display them on larger devices */}
      <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "10px" }}>
        <Button variant="contained" sx={{ backgroundColor: "#0051FF" }}>
          Login
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#0051FF" }}>
          Signup
        </Button>
      </Box>

      {/* hide icon on larger devices and display it on smaller devices */}
      <IconButton
        onClick={() => setIsMenuClicked(!isMenuClicked)}
        sx={{
          display: { xs: "flex", sm: "none" },
          color: "#0051FF",
        }}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>

      {isMenuClicked && <NavbarMenu />}
    </>
  );
}
