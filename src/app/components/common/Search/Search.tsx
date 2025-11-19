"use client";

import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const Search = () => {
  const [jobInfo, setJobInfo] = useState({
    title: "",
    location: "",
    experience: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setJobInfo((prev) => ({
      ...prev,
      [name]: name === "experience" ? (value === "" ? 0 : Number(value)) : value,
    }));
  }

  function handleSearch() {
    console.log(jobInfo);
  }

  return (
    <Paper
      elevation={24}
      sx={{
        p: "15px",
        borderRadius: "10px",
        display: "flex",
        gap: "8px",
        width: "70vw",
      }}
    >
      <TextField
        value={jobInfo.title}
        onChange={handleChange}
        name="title"
        label="Search job title/skills/company"
        type="search"
        sx={{ width: "100%" }}
      />
      <TextField
        value={jobInfo.location}
        onChange={handleChange}
        name="location"
        label="Enter location"
        type="search"
        sx={{ width: "100%" }}
      />
      <TextField
        value={jobInfo.experience === 0 ? "" : jobInfo.experience.toString()}
        onChange={handleChange}
        name="experience"
        label="Year of Experience"
        type="number"
        sx={{ width: "100%" }}
      />
      <Button
        onClick={handleSearch}
        variant="contained"
        sx={{ backgroundColor: "#0051FF", px: "40px" }}
      >
        Search
      </Button>
    </Paper>
  );
};

export default Search;
