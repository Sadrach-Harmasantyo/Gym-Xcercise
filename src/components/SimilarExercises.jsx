import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
  return (
    <Box mt={"100px"} p={"20px"}>
      <Typography variant="h4" mb={"30px"} fontWeight={"bold"} textTransform={"capitalize"}>
        Exercises that target the <span style={{ color: "#ff2625" }}> similar muscle group </span>
      </Typography>
      <Stack>{targetMuscleExercise.length ? <HorizontalScrollBar data={targetMuscleExercise} /> : <Loader />}</Stack>
      <Typography variant="h4" mb={"30px"} mt={"100px"} fontWeight={"bold"} textTransform={"capitalize"}>
        Exercises that have the <span style={{ color: "#ff2625" }}> similar equipment</span>
      </Typography>
      <Stack>{equipmentExercise.length ? <HorizontalScrollBar data={equipmentExercise} /> : <Loader />}</Stack>
    </Box>
  );
};

export default SimilarExercises;
