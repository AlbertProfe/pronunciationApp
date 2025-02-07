import { useState, useEffect } from "react";
import './App.css'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  Grid,
  Avatar
} from "@mui/material";
import { fetchUsers } from "./data-api";

export default function Users() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const getUsers= async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch words:", error);
      }
    };

    getUsers();
  }, []);


  return (
  
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#F0F4F8" }}
        >

        User List
        </Typography>
        <Grid container spacing={2}>
             {users.map((users) => (
             
            <Grid item xs={12} sm={6} md={4} key={users.id}>
              
              <Card
                sx={{
                  backgroundColor: "rgba(240, 244, 248, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                  },
                }}
               
              >
          
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#F0F4F8" }}
                  >
                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 {users.users}
                 {users.Avatar}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: "#B0B8C1" }}>
                    name: {users.name},<br></br>
                    Age: {users.age},<br></br>
                    email: {users.email}<br></br>
                 </Typography>
 
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container> 
    
  );
  
}