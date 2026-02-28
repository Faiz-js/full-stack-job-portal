import { Grid, Stack, Typography } from "@mui/material";
import JobCard from "./JobCard";

const DisplayJobs = () => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Typography variant="h5">All Jobs (1215)</Typography>

      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => (
          <Grid size={6}>
            <JobCard />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default DisplayJobs;
