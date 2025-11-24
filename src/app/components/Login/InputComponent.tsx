"use client";

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const InputComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);
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
