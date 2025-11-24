import { Box, Paper, Typography } from "@mui/material";
import InputComponent from "./InputComponent";

const LoginComponent = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 6,
          borderRadius: 5,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">Login to your account</Typography>
          <Typography sx={{ color: "gray" }}>
            Welcome back! Select the below login methods.
          </Typography>
        </Box>

        <InputComponent />
      </Paper>
    </Box>
  );
};

export default LoginComponent;
