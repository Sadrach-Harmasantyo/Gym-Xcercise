import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" fontWeight={"bold"} marginBottom={"35px"}>
        Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{
          flexDirection: { md: "row" },
          gap: { md: "40px", xs: "20px" },
        }}
      >
        {exerciseVideos.length ? (
          exerciseVideos.slice(0, 6).map((item, index) => (
            <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} key={index} target="_blank" rel="noreferrer" style={{ textDecoration: "none", width: "360px", maxHeight: "315px" }}>
              <img style={{ borderRadius: "15px", width: "100%" }} src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box marginBottom="50px" mt={"10px"}>
                <Typography color="#000" variant="h6">
                  {item.video.title}
                </Typography>
                <Typography color="#000">by {item.video.channelName}</Typography>
              </Box>
            </a>
          ))
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
