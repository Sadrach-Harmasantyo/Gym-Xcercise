import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "../../src/App.css";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const scrollRef = React.useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box position="relative">
      <ArrowBack onClick={handleScrollLeft} cursor="pointer" sx={{ color: "#ff2625", position: "absolute", top: "30%", left: 0, zIndex: 1 }} />
      <Box ref={scrollRef} sx={{ overflowX: "auto", whiteSpace: "nowrap", scrollbarWidth: "none" }} className="horizontal-scroll" overflow={"hidden"}>
        {data.map((item) => (
          <Box key={item.id || item} m="0 40px" display="inline-block">
            {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />}
          </Box>
        ))}
      </Box>
      <ArrowForward onClick={handleScrollRight} cursor="pointer" sx={{ color: "#ff2625", position: "absolute", top: "30%", right: 0, zIndex: 1 }} />
    </Box>
  );
};

export default HorizontalScrollBar;
