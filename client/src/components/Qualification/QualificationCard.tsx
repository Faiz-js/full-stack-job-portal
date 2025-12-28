import { Box, Button, Paper, Typography } from "@mui/material";

interface QualificationCardProps {
  qualificationCard: { id: number; icon: string; label1: string; label2: string }[];
}

const QualificationCard = ({ qualificationCard }: QualificationCardProps) => {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      {qualificationCard.map((c) => (
        <Paper
          key={c.id}
          elevation={12}
          sx={{
            width: "15vw",
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography>{c.icon}</Typography>
          <Typography>{c.label1}</Typography>
          <Typography>{c.label2}</Typography>
          <Button>View Jobs</Button>
        </Paper>
      ))}
    </Box>
  );
};

export default QualificationCard;
