import { Box, Button, Stack, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";
import React from "react";
import Loader from "./Loader";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
    {
      icon: TargetImage,
      name: target,
    },
  ];

  return (
    <Stack gap={"60px"} sx={{ flexDirection: { md: "row" }, p: "20px", alignItems: "center" }}>
      <Stack sx={{ width: { xs: "100%", md: "50%" } }}>
        <img src={gifUrl} alt={name} loading="lazy" width={"100%"} />
      </Stack>
      <Stack sx={{ gap: { lg: "35px", xs: "20px" }, width: { xs: "100%", md: "50%" } }}>
        <Typography variant="h4" sx={{ color: "#ff2625" }} fontWeight={"bold"} textTransform={"capitalize"}>
          {name}
        </Typography>
        <Typography textAlign={"justify"}>
          Exercises keep you strong. {name} is one of the best exercises to target your {bodyPart}, {target}, and {equipment}. Engaging in this activity will not only strengthen your {bodyPart} muscles but also enhance your {target}{" "}
          abilities. Whether you use {equipment} or not, this exercise promises to improve your mood and energy levels, leaving you feeling revitalized and empowered.
        </Typography>

        <Box display={"flex"} justifyContent={"space-around"}>
          {extraDetail.length ? (
            extraDetail.map((item) => (
              <Stack key={item.name || item.icon} alignItems={"center"} gap="24px" justifyContent={"space-between"}>
                <Button sx={{ background: "#fff2db", borderRadius: "50%", width: "100px", height: "100px" }}>
                  <img src={item.icon} alt={bodyPart} />
                </Button>
                <Typography textTransform={"capitalize"}>{item.name}</Typography>
              </Stack>
            ))
          ) : (
            <Loader />
          )}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Detail;
