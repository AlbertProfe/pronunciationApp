import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Container,
  Grid2 as Grid,
} from "@mui/material";
import { fetchUser } from "./data-api";

export default function User() {
  const [user, setUser] = useState(null); // Initialize as null

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUser();
        const userId = 1; // The ID of the user you want to retrieve
        const user = data.find((u) => u.id === userId); // Find the user with the specified ID
        setUser(user);
      } catch (error) {
        console.error("Failed to fetch user.", error);
      }
    };

    getUser();
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
          Your Profile:
        </Typography>
        {user ? (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              sx={{
                background:
                  "linear-gradient(135deg,rgb(101, 246, 174) 0%,rgb(18, 138, 122) 100%)", // Added gradient background
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(186, 10, 202, 0.56)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 8px rgba(247, 17, 158, 0.64)",
                },
              }}
            >
              <CardContent>
                <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
                  Name: {user.name}
                </Typography>
                <Avatar>
                  {user.avatar}
                </Avatar>
                <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
                  <p>Age: {user.age}</p>
                  <p>Email: {user.email}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ) : (
          <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
            User not found
          </Typography>
        )}
      </Box>
    </Container>
  );
}