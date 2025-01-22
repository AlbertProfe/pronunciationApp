import { fetchUsers } from "../middleware/data-api";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import "../assets/styles/UserCard.css"

export default function UsersList() {
  // hooks and business logic
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log("ERROR");
      }
    };
    getUsers();
  }, []);
  return (
    <Box className="user-container">
      {users
        .filter((user) => user.id === 22)
        .map((user) => (
          <Card key={user.id} className="user-card">
            <Box className="card-header">
              <Typography variant="h6" className="welcome-text">
                Welcome to Pronunciation App
                <Typography variant="h4">{user.name}</Typography>
              </Typography>

            </Box>
            <CardContent className="card-content">
              <Box className="box-username-avatar">
                <Avatar className="user-avatar">
                  {Array.from(user.username)[0].toUpperCase()}
                </Avatar>
                <Typography
                  variant="h5"
                  component="h2"
                  className="username-text">
                  username: @{user.username}
                </Typography>
              </Box>

              <Box className="info-container">
                <Box className="info-row">
                  <Typography
                    variant="body1"
                    className="info-label"
                  >
                    ID
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {user.id}
                  </Typography>
                </Box>
                {user.level && (
                  <Box className="info-row">
                    <Typography
                      variant="body1"
                      className="info-label"
                    >
                      Level
                    </Typography>
                    <Typography
                      variant="body1"
                      className="level-value"
                    >
                      {user.level}
                    </Typography>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}
