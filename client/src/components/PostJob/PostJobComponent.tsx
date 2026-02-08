"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const PostJobComponent = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h4">Post a Job</Typography>
        <Typography color="gray">
          Find the best talent for the company
        </Typography>
      </Box>

      <Stack spacing={2}>
        <TextField label="Job Title" />
        <TextField label="Company Name" />
        <FormControl>
          <InputLabel>Work-mode</InputLabel>
          <Select label="Work-mode">
            <MenuItem value="on-site">On-site</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="hybrid">Hybrid</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Min Salary" />
        <TextField label="Years of Experience" />
        <TextField label="Country" />
        <TextField label="City" />
        <TextField label="Job Description" rows={12} multiline />
      </Stack>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#0051FF", px: 5, py: 1 }}
      >
        Post Job
      </Button>
    </Container>
  );
};

export default PostJobComponent;
