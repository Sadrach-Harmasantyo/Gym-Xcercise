import { Box, Button, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box height={"100vh"} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} position={"relative"}>
      <Box display={"flex"} width={"90%"}>
        <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "unset" } }}>
          <Typography color={"#FF2625"} fontWeight="600" fontSize={"26px"} mb={3}>
            Fitness Club
          </Typography>
          <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "40px" } }} mb={3}>
            Sweet, Smile <br /> and Repeat
          </Typography>
          <Typography fontSize={"22px"} mb={3}>
            Check out the most effective exercises
          </Typography>
          <Button variant="contained" color={"error"} href="#exercises" sx={{ backgroundColor: "#FF2625", padding: "10px" }}>
            Explore Exercises
          </Button>
          <Typography position={"absolute"} fontSize={"200px"} fontWeight={600} color={"#FF2625"} sx={{ opacity: 0.1, display: { md: "block", xs: "none" } }}>
            Xcercise
          </Typography>
        </Box>
        <Box
          position={"absolute"}
          top={0}
          sx={{
            opacity: { xs: 0.4, md: 1 },
            width: { xs: "100%", md: "500px", lg: "650px" },
            height: { xs: "100%", md: "90%" },
            zIndex: { xs: -1, md: 10 },
            right: { xs: 0, md: "5%" },
            borderRadius: { md: "0 0 40px 40px", overflow: "hidden" },
            bgcolor: "lightgray",
          }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
