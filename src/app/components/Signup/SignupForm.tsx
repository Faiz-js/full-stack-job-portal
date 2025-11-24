"use client";

import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const SignupForm = () => {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    mob_num: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    console.log(signupDetails);
  };
  return (
    <Stack spacing={2}>
      <TextField
        label="Full name"
        name="name"
        value={signupDetails.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        value={signupDetails.email}
        onChange={handleChange}
      />
      <TextField
        label="Mobile number"
        name="mob_num"
        value={signupDetails.mob_num}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={signupDetails.password}
        onChange={handleChange}
      />
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ bgcolor: "#0051FF", py: 2 }}
      >
        Register
      </Button>
    </Stack>
  );
};

export default SignupForm;
