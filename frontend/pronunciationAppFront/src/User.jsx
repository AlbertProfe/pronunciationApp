import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Container,
  Grid,
} from "@mui/material";
import { fetchUser } from "./data-api";

function UserComponent() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const data = await fetchUser();
        console.log("Fetched data:", data);
        console.log("Type of data:", typeof data);
        console.log("Is array?:", Array.isArray(data));

        if (data && Array.isArray(data)) {
          const userId = "1";
          const foundUser = data.find((u) => u.id === userId);
          setUser(foundUser);
        } else {
          console.error("Data is not array:", data);
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
                <Avatar src={user.avatar.imageId} alt={user.avatar.imageName} />
                <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
                  <p>Age: {user.age}</p>
                  <p>Email: {user.email}</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ) : (
          <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
            User not found or data could not be fetched.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default UserComponent;