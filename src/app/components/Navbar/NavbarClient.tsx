"use client";

import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useRef, useEffect } from "react";
import NavbarMenu from "./NavbarMenu";
import { useRouter } from "next/navigation";

const NavbarClient = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLButtonElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsMenuClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* hide buttons on mobile devices and display them on larger devices */}
      <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "10px" }}>
        <Button
          onClick={() => router.push("/login")}
          variant="contained"
          sx={{ backgroundColor: "#0051FF" }}
        >
          Login
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#0051FF" }}>
          Signup
        </Button>
      </Box>

      {/* hide icon on larger devices and display it on smaller devices */}
      <IconButton
        ref={iconRef}
        size="large"
        onClick={() => setIsMenuClicked(!isMenuClicked)}
        sx={{
          display: { xs: "flex", sm: "none" },
          color: "#0051FF",
        }}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>

      <NavbarMenu isOpen={isMenuClicked} ref={menuRef} />
    </>
  );
};

export default NavbarClient;
