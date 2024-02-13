import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"#fcf0f0"} width={"100%"} p={"20px"} mt={"50px"} textAlign={"center"}>
      <Typography variant="h4" fontWeight={"bold"}>
        <span style={{ color: "#ff2625" }}>G</span>X
      </Typography>
      <Typography variant="h6" fontWeight={"600"}>
        GymXcercise
      </Typography>
      <Typography textTransform={"capitalize"}>Made for learn react vite + materialUi + Rapid API</Typography>
    </Box>
  );
};

export default Footer;
