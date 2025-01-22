import { useEffect, useState } from "react";
import { fetchUserData, getUserImg } from "./data-api";

export default function User() {
  const [user, setUser] = useState({});
    const [error, setError] = useState(null)

  useEffect(function () {
    fetchUserData().then(function (data) {
      setUser(data);
    }).catch(function(error){
        setError("Error obteniendo usuario")
        console.error(error)
    });
  }, []);

  return (
    <>
        {
            error !== null ? (
                <h3 style={{color: 'red'}}>{error}</h3>
            ) : (
                <>
                <h2>{user.name}</h2>
                <img src={getUserImg(user.name)} alt={user.name} />
                </>
            )
        }
    </>
  );
}
