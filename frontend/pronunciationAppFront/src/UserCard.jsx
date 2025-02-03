import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import { fetchUsers } from "./data-api";

export default function Users() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUsers();
                if (data.length > 0) {
                    setUser(data[0]); // Only the first user
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
        };
        getUser();
    }, []);

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    First User
                </Typography>
                {user && (
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{user.name}</Typography>
                            <Typography variant="body2">{user.email}</Typography>
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Container>
    );
}
