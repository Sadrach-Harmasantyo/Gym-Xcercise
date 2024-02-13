import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt={"50px"} p={"20px"}>
      <Typography variant="h4" mb={"46px"} textTransform={"capitalize"} fontWeight={"bold"}>
        Showing Results
      </Typography>
      <Stack direction={"row"} sx={{ gap: { lg: "110px", xs: "50px" } }} flexWrap={"wrap"} justifyContent={"center"}>
        {exercises.length ? exercises.map((item) => <ExerciseCard key={item.id} exercise={item} />) : <Loader />}
      </Stack>
    </Box>
  );
};

export default Exercises;
