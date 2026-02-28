import { Box, Stack } from "@mui/material";
import FindJobHeader from "./FindJobHeader";
import FindJobFilter from "./FindJobFilter";
import DisplayJobs from "./DisplayJobs";

const FindJobComponent = () => {
  return (
    <Box>
      <FindJobHeader />

      <Stack direction="row" spacing={2}>
        <FindJobFilter />
        <DisplayJobs />
      </Stack>
    </Box>
  );
};

export default FindJobComponent;
