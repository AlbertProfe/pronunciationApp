import React, { useEffect, useState } from "react";
import { fetchUsers } from "./data-api.js";
import { Avatar } from "@mui/material";

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
                <h1>User:</h1>
                <ul>
                     
                            <Avatar
                            src= {' https://i.imgur.com/3yUKPqF.gif'}
                            alt= {users.name}
                            sx={{
                                width: "200px",
                                height:"200px"

                            }}
                            />
                            <p>Name: {users.name}</p>
                            <p>Email: {users.email}</p>
                        
                    
                </ul>
            </div>
        
    );
};
