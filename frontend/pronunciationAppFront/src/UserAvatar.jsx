import { Avatar } from "@mui/material";
import { fetchUser } from "./data-api";
import { useState, useEffect } from "react";

export default function UserAvatar() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUser ();
                setUser(data);
            } catch (error) {
                console.error("Failed to fetch user:", error);
            }
        };

        getUser();
    }, []);

    return(
        <>
            <Avatar sx={{ width: 56, height: 56 }} >{user.name}</Avatar>
        </>
    );
}