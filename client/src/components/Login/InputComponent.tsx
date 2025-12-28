"use client";

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const InputComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${res.status}`
        );
      }

      const data = await res.json();
      toast.success(data.message || "Login successful!");

      // Optionally redirect or clear form
      setEmail("");
      setPassword("");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred during login";
      toast.error(errorMessage);
      console.error("Error in login: ", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: 500,
      }}
    >
      <TextField
        label="Enter email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleClick}
        sx={{ bgcolor: "#0051FF", py: 2 }}
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
};

export default InputComponent;
