import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Avatar,
  
} from "@mui/material";
import { fetchUsers } from "./data-api";

export default function Users() {
    const [user, setUser] = useState(null);
    const avatarUrl = "https://i.imgur.com/5bU3pLf.jpeg"; // Avatar from imgur

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUsers();
                if (data.length > 0) {
                    setUser(data[0]); // Showing only the first user    
                }
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
        };
        getUser();
    }, []);

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4, flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Actual user
                </Typography>
                {user && (
                    <Card sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        p: 2, 
                        borderRadius: 3, 
                        boxShadow: 3, 
                        backgroundColor: "#f5f5f0",
                        color: "#333",
                        }}>
                        <Avatar src={avatarUrl} alt="User Avatar" sx={{ width: 64, height: 64, mr: 2 }} />
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                {user.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user.email}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Container>
    );
}
