"use client";

import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const SignupForm = () => {
  const [signupDetails, setSignupDetails] = useState({
    fullname: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(signupDetails),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.message || `HTTP error! status: ${res.status}`
        );
      }

      const data = await res.json();
      toast.success(data.message || "Signup successful!");

      // Clear form after successful signup
      setSignupDetails({
        fullname: "",
        email: "",
        mobileNumber: "",
        password: "",
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred during signup";
      toast.error(errorMessage);
      console.error("error from backend: ", error);
    }
  };

  return (
    <Stack spacing={2}>
      <TextField
        label="Full name"
        name="fullname"
        value={signupDetails.fullname}
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
        name="mobileNumber"
        value={signupDetails.mobileNumber}
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
