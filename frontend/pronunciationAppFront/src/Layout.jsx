import { Link, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
//import { Style } from "@mui/icons-material";

const StyledLink = styled(Link)({
  color: "#4b6cb7", // Matching the soft light gray text color
  textDecoration: "none",
  marginLeft: "20px",
  "&:hover": {
    color: "#FFFFFF", // Slightly lighter on hover
  },
});

export default function Layout() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(to right, #4b6cb7, #182848)", // Matching the body gradient
          boxShadow: "0 3px 5px 2px rgba(24, 40, 72, 0.3)", // Subtle shadow using the darker color
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textAlign: "left", color: "#F0F4F8" }}
          >
            pronunciationApp
          </Typography>
          <Button component={StyledLink} to="/">
            Home
          </Button>
          <Button component={StyledLink} to="/practice">
          Practice
          </Button>
         <Button component={StyledLink} to="/users">
          Users 
          </Button>
          <Button component={StyledLink} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ color: "#F0F4F8" }}>
        {" "}
        {/* Ensuring consistent text color */}
        <Outlet />
      </Container>
    </>
  );
}
