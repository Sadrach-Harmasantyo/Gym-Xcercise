import { Box, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isExercisePage = location.pathname.startsWith("/exercise");

  return (
    <Box position={"fixed"} zIndex={10} sx={{ width: "100%", p: { xs: "20px", sm: "20px 85px" } }} bgcolor={"#fff"} top={0} left={0} right={0}>
      <Stack direction={"row"} spacing={"60px"} width={"100%"} bgcolor={"#fff"} maxWidth={"1200px"} sx={{ margin: "0 auto" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "36px", fontWeight: "bold" }}>
          <Typography variant="h4" fontWeight={"bold"}>
            <span style={{ color: "#ff2625" }}>G</span>X
          </Typography>
        </Link>
        <Stack direction={"row"} gap={"40px"} alignItems={"center"}>
          <Link to="/" className={`${!isExercisePage ? "nav-link-active" : "nav-link"}`}>
            <Typography variant="h6">Home</Typography>
          </Link>
          <a href="/#exercise" className={`${isExercisePage ? "nav-link-active" : "nav-link"}`}>
            <Typography variant="h6">Exercise</Typography>
          </a>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
