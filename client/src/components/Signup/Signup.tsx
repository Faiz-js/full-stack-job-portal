import { Box, Container, Paper, Typography } from "@mui/material";
import SignupForm from "@/components/Signup/SignupForm";

const Signup = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Paper elevation={24} sx={{ p: 4, borderRadius: 5 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3">Registration Form</Typography>
          <Typography sx={{ color: "gray" }}>
            Register to apply for jobs of your choice all over the world
          </Typography>
        </Box>

        <SignupForm />
      </Paper>
    </Container>
  );
};

export default Signup;
