import { Box } from "@mui/material";
import LeftBox from "@/components/Trust/LeftBox";
import RightBox from "@/components/Trust/RightBox";

const Trust = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ bgcolor: "#B0CEFF", display: "flex", borderRadius: "10px" }}>
        <LeftBox />
        <RightBox />
      </Box>
    </Box>
  );
};

export default Trust;
