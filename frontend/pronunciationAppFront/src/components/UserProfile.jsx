import { useState, useEffect } from "react";
import { fetchUserById } from "../middleware/users-data-api";
import { Avatar, Box, Card, Typography } from "@mui/material";

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUserById(userId);
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    getUser();
  }, []);
  return (
    <>
      {user ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: 2,
            p: 2,
          }}
        >
          <Box>
            <Avatar
              alt="user.name"
              src={user.avatar.imageUrl}
              sx={{ width: 60, height: 60 }}
              variant="rounded"
              style={
                user.isPremium && {
                  border: "2px solid gold",
                }
              }
            />
          </Box>
          <Box>
            <Typography variant="h4" component="h1">
              {user.name}
            </Typography>
            <Typography variant="caption" component="p">
              Email: {user.email}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </>
  );
}
