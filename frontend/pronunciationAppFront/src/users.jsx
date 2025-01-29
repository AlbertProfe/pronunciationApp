import React, { useEffect, useState } from "react";
import { fetchUsers } from "./data-api.js";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Container,
    Grid,
    Button 
  } from "@mui/material";

const UsersList = () => {
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
                <h1>User</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <img
                                src={user.avatar}
                                alt={`${user.name}'s avatar`}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    marginRight: "15px",
                                }}
                            />
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        
    );
};

export default UsersList;
