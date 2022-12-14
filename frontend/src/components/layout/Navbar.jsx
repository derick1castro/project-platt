import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import Logo from "../../assets/logo.png";

// context
import { Context } from "../../context/UserContext";

function Navbar() {
  const { authenticated, logout } = useContext(Context);

  return (
    <nav className="flex justify-between py-4 px-6 border-b-2">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-[200px] mr-3" src={Logo} alt="Logo Platt" />
        </Link>
      </div>
      {authenticated ? (
        <ul className="flex items-center list-none">
          <li className="cursor-pointer font-medium py-2 px-3 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]">
            <Link to="/usuarios">Usuários</Link>
          </li>
          <li className="cursor-pointer font-medium py-2 px-3 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]">
            <Link to="/empresas">Empresas</Link>
          </li>
          <li className="cursor-pointer font-medium py-2 px-3 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]">
            <Link to="/solucoes/minhassolucoes">Soluções</Link>
          </li>
          <li
            className="cursor-pointer font-medium py-2 px-3 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]"
            onClick={logout}
          >
            Logout
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
