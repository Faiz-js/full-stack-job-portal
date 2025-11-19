import { Box, Button, Paper, Typography } from "@mui/material";

interface CompanyCardProps {
  companiesCard: { id: number; icon: string; text: string }[];
}

const CompanyCard = ({ companiesCard }: CompanyCardProps) => {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      {companiesCard.map((c) => (
        <Paper
          key={c.id}
          elevation={12}
          sx={{
            width: "10vw",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography>{c.icon}</Typography>
          <Typography>{c.text}</Typography>
          <Button>View Jobs</Button>
        </Paper>
      ))}
    </Box>
  );
};

export default CompanyCard;
