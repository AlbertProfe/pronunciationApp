import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Container, Card, CardContent } from "@mui/material";
import { fetchUser } from "./data-api";

export default function User() {
  const [user, setUser] = useState(null); // Initialize as null

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await fetchUser(); // fetchUser already returns the parsed JSON
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
          
            <Card className="userCard"
              sx={{
                background:
                  "linear-gradient(135deg,rgb(101, 246, 174) 0%,rgb(18, 138, 122) 100%)", // Added gradient background
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(10, 180, 202, 0.75)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 8px rgba(5, 238, 255, 0.89)",
                },
              }}
            >
              <CardContent>
                <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
                  Name: {user.name}
                </Typography>
                <Avatar src={`https://i.imgur.com/${user.avatar.imageId}.jpg`} alt={user.name} />
                <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
                  <p>Age: {user.age}</p>
                  <p>Email: {user.email}</p>
                </Typography>
              </CardContent>
            </Card>

        ) : (
          <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
            Loading...
          </Typography>
        )}
      </Box>
    </Container>
  );
}