import { Stack, Typography } from "@mui/material";
import Search from "../common/Search/Search";

const FindJobHeader = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Job Search</Typography>
      <Typography>Search for your desired job matching your skills</Typography>

      <Search />
    </Stack>
  );
};

export default FindJobHeader;
