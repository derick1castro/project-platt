import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import api from "../../utils/api";
import { useState, useEffect } from "react";

import Logo from "../../assets/logo.png";

// context
import { Context } from "../../context/UserContext";

function NavbarUsuario() {
  const [users, setUsers] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { logout } = useContext(Context);

  useEffect(() => {
    // api
    //   .get("/users/usuarios", {
    //     headers: {
    //       Authorization: `Bearer ${JSON.parse(token)}`,
    //     },
    //   })
    //   .then((response) => {
    //     setUsers(response.data.user);
    //   });
  }, [token]);

  return (
    <nav className="flex justify-between py-4 px-6 border-b-2">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-[200px] mr-3" src={Logo} alt="Logo Platt" />
        </Link>
      </div>

      {users.map((user) => (
        <ul className="flex items-center list-none">
          <li
            className="cursor-pointer font-medium py-2 px-3 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]"
            onClick={logout}
          >
            <span className="text-2xl">{user.name}</span>
            <span className="ml-1 ">ᐯ</span>
          </li>
        </ul>
      ))}
    </nav>
  );
}

export default NavbarUsuario;
