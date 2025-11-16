import { Box, Button, TextField } from "@mui/material";

const Search = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        p: "15px",
        borderRadius: "10px",
        display: "flex",
        gap: "8px",
        width: "70vw",
      }}
    >
      <TextField
        label="Search job title/skills/company"
        type="search"
        sx={{ width: "100%" }}
      />
      <TextField label="Enter location" type="search" sx={{ width: "100%" }} />
      <TextField
        label="Year of Experience"
        type="search"
        sx={{ width: "100%" }}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#0051FF", px: "40px" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
