import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../../assets/logo1.svg";
import imagem from "../../../assets/imagem.svg";
import Brumetal from "../../../assets/Brumetal.svg";
import C from "../../../assets/C.svg";
import Carapreta from "../../../assets/Carapreta.svg";
import Cargil from "../../../assets/Cargill.svg";
import Cebraze from "../../../assets/Cebraze.svg";
import Cmpc from "../../../assets/CMPC.svg";
import Columbia from "../../../assets/Columbia.svg";
import api from "../../../utils/api";
import AddSolucao from "../Solucoes/AddSolucao";

function SolutionDetails() {
  const [solucoes, setSolucoes] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/solucoes/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setSolucoes(response.data.solucoes);
      });
  }, [token, id]);

  return (
    <>
      {/* nav bar */}
      <nav className="flex justify-between min-h-[85px] items-center px-6 border-b-2 bg-[#FFFFFF]">
        <div className="flex mx-[120px]">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="mx-[120px] flex items-center">
          <ul className="flex items-center list-none ">
            <li className="font-semibold cursor-pointer px-3 text-[#68787B] hover:text-[#00abd6] transition ease-in-out duration-400">
              <Link to="/usuarios">Soluções</Link>
            </li>
            <li className="cursor-pointer font-medium py-2 px-3 text-[#68787B] hover:text-[#00abd6] transition ease-in-out duration-400 mr-[15px]">
              <Link to="/empresas">Indtechs</Link>
            </li>
            {/* <li className="cursor-pointer font-medium w-[35px] h-[35px] flex items center p-[5px] text-[#68787b] rounded-full bg-[red] hover:border-[#00abd6]">
              <Link to="/solucoes/minhassolucoes">DE</Link>
            </li> */}
          </ul>
          <span className="rounded-full bg-[#009CC2] p-[5px] w-[35px] flex justify-center">
            <Link
              className="text-[#FFFFFF] font-semibold"
              to="/solucoes/minhassolucoes"
            >
              DE
            </Link>
          </span>
        </div>
      </nav>

      <div className="h-[100%] bg-[#F5F5F5]">
        

        <section className="bg-[#E9FBFF]">
          <div className="flex flex-col items-center pt-[70px] space-y-3">
            <h1 className="font-bold text-[42px]">{solucoes.titulo}</h1>
            <p className="text-[#007794]">
              Uma solução de{" "}
              <span className="font-bold">{solucoes.indtech}</span>
            </p>
          </div>
          <div className="flex items-center justify-between py-[40px] mx-[140px]">
            <div className="max-w-[600px]">
              <p className="text-lg">{solucoes.descricao}</p>
            </div>
            <div className="mr-[120px]">
              <img className="w-[450px]" src={imagem} alt="" />
            </div>
          </div>
        </section>

        <section className="mt-[97px] flex ml-[140px] space-x-44">
          <div>
            <h2 className="mb-[12px] font-bold text-3xl text-[#111827]">
              Características
            </h2>
            <ul className="text-lg text-[#353A3C]">
              <li>• {solucoes.caracteristicas};</li>
              <li>• {solucoes.caracteristicas};</li>
              <li>• {solucoes.caracteristicas};</li>
              <li>• {solucoes.caracteristicas};</li>
              <li>• {solucoes.caracteristicas}.</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-[12px] font-bold text-3xl text-[#111827]">
              Dores atendidas
            </h2>
            <ul className="text-lg text-[#353A3C]">
              <li>• {solucoes.dores};</li>
              <li>• {solucoes.dores};</li>
              <li>• {solucoes.dores};</li>
              <li>• {solucoes.dores};</li>
              <li>• {solucoes.dores}.</li>
            </ul>
          </div>
        </section>

        <section className="mt-[120px] ml-[140px] ">
          <h2 className="font-bold text-3xl text-[#111827]">Clientes</h2>
          <div className="flex space-x-20 mt-[41px]">
            <div>
              <img src={Brumetal} alt="" />
            </div>
            <div>
              <img src={C} alt="" />
            </div>
            <div>
              <img src={Carapreta} alt="" />
            </div>
            <div>
              <img src={Cargil} alt="" />
            </div>
            <div>
              <img src={Cebraze} alt="" />
            </div>
            <div>
              <img src={Cmpc} alt="" />
            </div>
            <div>
              <img src={Columbia} alt="" />
            </div>
          </div>
        </section>

        <section className="my-[100px] ml-[140px] space-y-5">
          <h2 className="font-bold text-3xl text-[#111827]">Cases</h2>
          <ul className="text-lg text-[#353A3C]">
            <li>• {solucoes.linkCase};</li>
            <li>• {solucoes.linkCase};</li>
            <li>• {solucoes.linkCase};</li>
            <li>• {solucoes.linkCase};</li>
            <li>• {solucoes.linkCase}.</li>
            
          </ul>
        </section>

        <footer className="flex flex-col justify-center items-center h-[291px] bg-[#485659] space-y-6">
          <div className=" text-3xl text-white flex flex-col">
            <span>Vamos acelerar a transformação</span>
            <span className="mx-[52px]">digital da sua indústria? </span>
          </div>
          <div>
            <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[14px] px-[21px] max-w-[230px] rounded-lg">
              Solicitar demonstração
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

export default SolutionDetails;
