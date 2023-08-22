import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Logout() {
  const { logout } = useAuth0();

  function logoutUser(){
    logout();
    window.localStorage.removeItem("user");
  }

  return (
    <button
      onClick={() => logoutUser()}
      className="bg-transparent border-0 dropdown-item "
    >
      Salir
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="ms-2"
      >
        <path
          fill="#00000"
          d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"
        />
      </svg>
    </button>
  );
}
