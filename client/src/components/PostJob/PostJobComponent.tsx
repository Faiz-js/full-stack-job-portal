"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const PostJobComponent = () => {
  const [postJobData, setPostJobData] = useState({
    jobTitle: "",
    companyName: "",
    skills: "",
    workMode: "",
    minSalary: "",
    yearsOfExp: "",
    country: "",
    city: "",
    jobDesc: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPostJobData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setPostJobData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log("postJobData: ", postJobData);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 2 }}>
        <Typography variant="h4">Post a Job</Typography>
        <Typography color="gray">
          Find the best talent for the company
        </Typography>
      </Box>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextField
            name="jobTitle"
            label="Job Title"
            placeholder="Enter job title"
            value={postJobData.jobTitle}
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
          <TextField
            name="companyName"
            label="Company Name"
            placeholder="Enter company name"
            value={postJobData.companyName}
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            name="skills"
            label="Skills"
            placeholder="skills1, skills2, skills3,..."
            value={postJobData.skills}
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
          <FormControl fullWidth sx={{ flex: 1 }}>
            <InputLabel>Work-mode</InputLabel>
            <Select
              name="workMode"
              label="Work-mode"
              value={postJobData.workMode}
              onChange={handleSelectChange}
            >
              <MenuItem value="on-site">On-site</MenuItem>
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="hybrid">Hybrid</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            name="minSalary"
            label="Min Salary"
            placeholder="Enter minimum salary amount"
            value={postJobData.minSalary}
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
          <TextField
            name="yearsOfExp"
            label="Years of Experience"
            placeholder="Enter years of experience"
            value={postJobData.yearsOfExp}
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            name="country"
            label="Country"
            placeholder="Enter country"
            value={postJobData.country}
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
          <TextField
            name="city"
            label="City"
            placeholder="Enter city"
            value={postJobData.city}
            onChange={handleChange}
            sx={{ flex: 1 }}
          />
        </Stack>
        <TextField
          name="jobDesc"
          label="Job Description"
          placeholder="Enter detailed job description"
          value={postJobData.jobDesc}
          onChange={handleChange}
          rows={12}
          multiline
        />
      </Stack>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#0051FF", px: 5, py: 1, my: 2 }}
      >
        Post Job
      </Button>
    </Container>
  );
};

export default PostJobComponent;
