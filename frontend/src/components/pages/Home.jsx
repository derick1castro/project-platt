import React from "react";
import { UserProvider } from "../../context/UserContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "../layout/Container";
import Message from "../layout/Message";
import api from "../../utils/api";
// import Navbar from "../layout/Navbar";
import NavbarUsuario from "../layout/NavbarUsuario";

function Home() {
  const [solucoes, setSolucoes] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/solucoes/minhassolucoes", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setSolucoes(response.data.solucoes);
      });
  }, [token]);

  return (
    <>
      <UserProvider>
        <NavbarUsuario />
        <Message />

        <div className="text-6xl flex justify-center mt-[40px]">
          FILTROS
          
        </div>

        <div className="flex justify-center">
          <div className="flex m-[80px] max-w-[2100px] flex-wrap justify-center ">
            {solucoes.map((solucao) => (
              <section className="w-[500px] h-[200px] flex flex-wrap border-solid border-[3px] border-[#00abd6] mx-[20px] mb-[40px]">
                <div className="">
                  <div className="">
                    <h1>{solucao.titulo}</h1>
                    <p>{solucao.descricao}</p>
                  </div>
                  <button>Saiba mais</button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </UserProvider>
    </>
  );
}

export default Home;
