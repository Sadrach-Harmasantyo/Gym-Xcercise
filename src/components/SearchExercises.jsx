import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = React.useState("");
  const [bodyParts, setBodyParts] = React.useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      const searchExercise = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1300, left: 100, behavior: "smooth" });

      console.log({ searchExercise });

      setSearch("");
      setExercises(searchExercise);
    }
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} p={"20px"} id="exercise">
      <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} textAlign={"center"} my={"50px"}>
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box display={"flex"} mb={"40px"} width={"100%"} justifyContent={"center"}>
        <TextField
          color="error"
          sx={{ input: { fontWeight: "700", border: "none", borderRadius: "4px" }, width: { lg: "800px", xs: "350px" }, backgroundColor: "#fff", borderRadius: "40px" }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          position={"absolute"}
          variant="contained"
          color="error"
          sx={{ bgcolor: "#ff2625", color: "#fff", textTransform: "none", width: { lg: "175px", xs: "80px" }, fontSize: { lg: "20px", xs: "14px" }, height: "56px" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
