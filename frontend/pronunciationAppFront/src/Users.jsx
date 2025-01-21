import { fetchUsers } from "./data-api";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

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

  /* THIS IS MY ORIGINAL VERSION
  return (
    <>
      <Card>
        {users
          .filter((user) => user.id === 1)
          .map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
      </Card>
    </>
  );
  */
  // THIS IS AI VERSION
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {users
        .filter((user) => user.id === 22)
        .map((user) => (
          <Card
            key={user.id}
            sx={{
              maxWidth: 380,
              width: "100%",
              borderRadius: 2,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              backgroundColor: "rgba(255, 255, 255)",
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translate(5px, -5px)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: 140,
                background: "linear-gradient(135deg, #2196f3 0%, #64b5f6 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 3,
                pb: 4,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  mb: 2,
                  textAlign: "center",
                  fontWeight: 500,
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Welcome to Pronunciation App
                <Typography variant="h4">{user.name}</Typography>
              </Typography>

              <Box sx={{ position: "relative" }}>
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: "#1769aa",
                    border: "3px solid white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {Array.from(user.username)[0].toUpperCase()}
                </Avatar>
              </Box>
            </Box>

            <CardContent sx={{ pt: 3, pb: 4 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  textAlign: "center",
                  mb: 3,
                  fontWeight: "600",
                  color: "text.primary",
                }}
              >
                username: @{user.username}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  bgcolor: "grey.50",
                  p: 2,
                  borderRadius: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 1,
                  }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    ID
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {user.id}
                  </Typography>
                </Box>

                {user.level && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      Level
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "primary.main",
                        fontWeight: "600",
                      }}
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
