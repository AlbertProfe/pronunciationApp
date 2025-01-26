import { useEffect, useState } from "react";
import { fetchUserData } from "./data-api";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { stringAvatar } from "./utils";

export default function User() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(function () {
    fetchUserData()
      .then(function (data) {
        setUser(data);
      })
      .catch(function (error) {
        setError("Error obteniendo usuario");
        console.error(error);
      });
  }, []);

  if (!user && !error) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {error !== null ? (
        <h3 style={{ color: "red" }}>{error}</h3>
      ) : (
        <Card variant="outlined" sx={{ display: 'inline-block', background: "black" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "1rem",
              justifyContent: 'start',
              gap: '2rem',
            }}
          >
            <Avatar
              {...stringAvatar(user.name)}
              sx={{ width: 100, height: 100 }}
            />
            <CardContent sx={{ flex: "1", color: "white", textAlign: 'left' }}>
              <Typography component="div" variant="h5">
                {user.name}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {user.email}
              </Typography>
              <Typography variant="subtitle2" component="div">
                Age: {user.age}
              </Typography>
              <Typography variant="subtitle2" component="div">
                Member since: {new Date(user.joinDate).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
}
