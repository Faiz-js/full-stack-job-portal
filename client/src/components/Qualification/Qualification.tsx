import { Box, Typography } from "@mui/material";
import QualificationCard from "@/components/Qualification/QualificationCard";

const qualificationCard = [
  {
    id: 1,
    icon: "10th pass icon",
    label1: "10th pass",
    label2: "10,000+ vacancy",
  },
  {
    id: 2,
    icon: "12th pass icon",
    label1: "12th pass",
    label2: "10,000+ vacancy",
  },
  {
    id: 3,
    icon: "diploma icon",
    label1: "Diploma pass",
    label2: "10,000+ vacancy",
  },
  {
    id: 4,
    icon: "graduate icon",
    label1: "Graduate",
    label2: "10,000+ vacancy",
  },
  {
    id: 5,
    icon: "post graduate icon",
    label1: "Post graduate",
    label2: "10,000+ vacancy",
  },
];

const Qualification = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ bgcolor: "#B0CEFF", py: 5, borderRadius: "10px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4">What is your Qualification?</Typography>

          <QualificationCard qualificationCard={qualificationCard} />
        </Box>
      </Box>
    </Box>
  );
};

export default Qualification;
