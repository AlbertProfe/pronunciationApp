import React, { useEffect, useState } from "react";
import { fetchUsers } from "./data-api.js";
import { Avatar, Box } from "@mui/material";
import "./BoxAnimation.css";

export default function UsersList  ()  {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (err) {
                setError("Error fetching users.");
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>{error}</p>;

    return (
           
            <div>
            <Box
            className="animated-box"
sx={{
    display: "flex",
    alignItems: "center", // Alinea el contenido horizontalmente
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "black",
    color: "white", 
  }}
            >
                   <Avatar
                            src= {' https://i.imgur.com/3yUKPqF.gif'}
                            alt= {users.name}
                            sx={{
                                width: "100px",
                                height:"100px",
                                marginRight: "20px",

                            }}
                            />
                <h1>User:</h1>
                <ul>
                     
                         
                            <h2>{users.name}</h2>
                            <p> {users.email}</p>
                        
                    
                </ul>
            </Box>    
            </div>
        
    );
};
