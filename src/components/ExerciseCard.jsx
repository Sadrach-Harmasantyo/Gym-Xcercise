import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: "none", width: "360px" }} className="card-img">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction={"row"}>
        <Button variant="contained" color="error" sx={{ ml: "21px", color: "#fff", background: "#ff2625", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>
          {exercise.bodyPart}
        </Button>
        <Button variant="contained" color="warning" sx={{ ml: "21px", color: "#fff", background: "#ffc757", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize" }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight={"bold"} mt="15px" textTransform={"capitalize"} fontSize={"20px"}>
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
