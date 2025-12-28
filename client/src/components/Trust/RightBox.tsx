import { Box, Typography } from "@mui/material";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const itemsToDisplay = [
  {
    id: 1,
    icon: <TaskAltOutlinedIcon />,
    text: "100% free and verified job",
  },
  {
    id: 2,
    icon: <NearMeOutlinedIcon />,
    text: "Best job in your locality",
  },
  {
    id: 3,
    icon: <CallOutlinedIcon />,
    text: "Get direct call with HR for interview",
  },
];

const RightBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        mx: 8
      }}
    >
      {itemsToDisplay.map((i) => (
        <Box
          key={i.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            textAlign: "center",
          }}
        >
          {i.icon}
          <Typography variant="subtitle1">{i.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default RightBox;
