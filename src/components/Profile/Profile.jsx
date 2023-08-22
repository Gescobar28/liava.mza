import React, { useEffect, useState } from "react";
import { useAuth0, Auth0Context } from "@auth0/auth0-react";

export default function Profile() {
  const [userLocal, setUserLocal] = useState();

  useEffect(() => {
    const userInfoJSON = window.localStorage.getItem("user");
    if (userInfoJSON) {
      const user = JSON.parse(userInfoJSON);
      setUserLocal(user);
    }
  }, []);

  console.log(userLocal);
  return (
    <div>
      {!userLocal ? (
        "Loading"
      ) : (
        <div className="container my-5 d-flex justify-content-center">
          <div className="border">
            <h1 className="text-center d-block mb-5 border">Mi Perfil</h1>
            <img src={userLocal.picture} alt="" className="d-flex border justify-content-center " />
            <span className="d-block">Nombre: {userLocal.given_name}</span>
            <span className="d-block">Apellido: {userLocal.family_name}</span>
            <span className="d-block">Correo: {userLocal.email}</span>
          </div>
        </div>
      )}
    </div>
  );
}
