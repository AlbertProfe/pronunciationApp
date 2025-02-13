import {Link, Outlet} from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import {styled} from "@mui/material";


const StyledLink = styled(Link)({
    color : "#4b6cb7",
    textDecoration: "none",
    marginLef: "20px",
    "&:hover":{
        color:"#FFFFF",
    }, 
});

export default function layout(){
    return(
        <>
        
        <AppBar
        position="static"
        sx={{
            background: "linear-gradient (to right, #4b6cb7, #182848)",
            boxShadow: "0 3px 5px 2px rgba(24,40,72,0.3)",
        }}
        >
            <Toolbar>
                <Typography
                variant ="h6"
                sx={{flexGrow: 1, textAlign: "left", color: "#F0F4F8"}}
                >
                    Pronunciation App
                </Typography>
                <Button Component= {StyledLink} to="/">
                Home </Button>
                <Button component = {StyledLink} to="/practice">
                Practice
                 </Button>
                <Button component = {StyledLink} to = "/about">
                    About 
                </Button> 
            </Toolbar>
        </AppBar>
        <Container sx= {{ color: "#F0F4F8"}}>
            {""}
            <Outlet/>
        </Container>
        </>
    );
} 