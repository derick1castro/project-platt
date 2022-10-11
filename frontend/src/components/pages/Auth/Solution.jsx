import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Img from "../../../assets/base.png";
import Logo from "../../../assets/logo1.svg";
import todas from "../../../assets/todas.png";
import paradas from "../../../assets/Paradas.png";
import manu from "../../../assets/manu.svg";
import logistica from "../../../assets/logistica.svg";
import plan from "../../../assets/plan.png";
import esg from "../../../assets/esg.svg";
import sol from "../../../assets/sol1.svg";

// context
import { Context } from "../../../context/UserContext";

function Solution() {
  const { authenticated, logout } = useContext(Context);

  return (
    <div className="h-[100%] bg-[#F5F5F5]">
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

      <div className="flex flex-col items-center mt-[30px] mb-[34px]">
        <p className="text-[42px] font-bold text-[#353A3C]">Soluções</p>
        <span>
          <p className="text-[#68787B]">9 soluções cadastradas</p>
        </span>
      </div>

      <div className="border-b-2 pb-[22px] w-[994px] flex items-center justify-center mx-auto mb-[70px]">
        <span className="flex flex-col items-center w-[65px] h-[91px] mr-[81px]">
          <img src={todas} alt="" />
          <span className="flex items-center justify-center ">
            <p className="font-semibold text-[#68787B]">Todas as soluções</p>
          </span>
        </span>

        <span className="flex flex-col items-center w-[65px] h-[91px] mr-[81px]">
          <img src={paradas} alt="" />
          <span className="flex items-center justify-center w-[75px]">
            <p className="font-semibold text-[#68787B]">
              Paradas de manutenção
            </p>
          </span>
        </span>

        <span className="flex flex-col items-center w-[95px] h-[91px] mr-[81px]">
          <img src={manu} alt="" />
          <span className="flex items-center justify-center">
            <p className="font-semibold text-[#68787B]">
              Engenharia e manutenção
            </p>
          </span>
        </span>

        <span className="flex flex-col items-center w-[95px] h-[91px] mr-[81px]">
          <img src={logistica} alt="" />
          <span className="h-[100%] flex items-center justify-center">
            <p className="font-semibold text-[#68787B]">
              Logistica e backoffice
            </p>
          </span>
        </span>

        <span className="flex flex-col items-center w-[95px] h-[91px] mr-[81px]">
          <img src={plan} alt="" />
          <span className=" h-[100%] flex items-center justify-center">
            <p className="font-semibold text-[#68787B]">
              Planejamento e controle
            </p>
          </span>
        </span>

        <span className="flex flex-col items-center w-[95px] h-[91px]">
          <img src={esg} alt="" />
          <span className="h-[100%] flex items-center justify-center">
            <p className=" font-semibold text-[#68787B]">ESG</p>
          </span>
        </span>
      </div>

      {/* cartões */}
      <div className="flex flex-wrap justify-center">
        <section className="w-[490px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={sol} alt="" className="rounded-lg" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659] ">
            <span className="font-bold ">
              Plataforma de Gestão de Contratos
            </span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por NGO Soluções
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                <Link to="/solution/details">
                  Saber mais
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section className="w-[480px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={Img} alt="" className="w-[180px] h-[120px]" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659] ">
            <span className="font-bold">
              Plataforma de Previsibilidade de Falhas
            </span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por Futurai
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                Saber mais
              </button>
            </div>
          </div>
        </section>

        <section className="w-[480px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={Img} alt="" className="w-[180px] h-[120px]" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659]">
            <span className="font-bold ">Monitoramento de Ativos com BLE</span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por Trackfy
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                Saber mais
              </button>
            </div>
          </div>
        </section>

        <section className="w-[480px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={Img} alt="" className="w-[180px] h-[120px]" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659]">
            <span className="font-bold ">
              Plataforma de Gestão de Contratos
            </span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por NGO Soluções
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                Saber mais
              </button>
            </div>
          </div>
        </section>

        <section className="w-[480px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={Img} alt="" className="w-[180px] h-[120px]" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659]">
            <span className="font-bold ">
              Plataforma de Gestão de Contratos
            </span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por NGO Soluções
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                Saber mais
              </button>
            </div>
          </div>
        </section>

        <section className="w-[480px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={Img} alt="" className="w-[180px] h-[120px]" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659]">
            <span className="font-bold ">
              Plataforma de Gestão de Contratos
            </span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por NGO Soluções
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                Saber mais
              </button>
            </div>
          </div>
        </section>

        <section className="w-[480px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={Img} alt="" className="w-[180px] h-[120px]" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659]">
            <span className="font-bold ">
              Plataforma de Gestão de Contratos
            </span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por NGO Soluções
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                Saber mais
              </button>
            </div>
          </div>
        </section>

        <section className="w-[480px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={Img} alt="" className="w-[180px] h-[120px]" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659]">
            <span className="font-bold ">
              Plataforma de Gestão de Contratos
            </span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por NGO Soluções
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                Saber mais
              </button>
            </div>
          </div>
        </section>

        <section className="w-[480px] h-[180px] flex rounded-lg m-5 shadow-xl bg-white">
          <div className="min-w-[240px] flex rounded-lg justify-center items-center bg-[#E9FBFF]">
            <img src={Img} alt="" className="w-[180px] h-[120px]" />
          </div>
          <div className="flex flex-col mt-[12px] ml-[16px] text-[#485659]">
            <span className="font-bold ">
              Plataforma de Gestão de Contratos
            </span>
            <span className="text-xs font-semibold text-[#B4B6C5]">
              por NGO Soluções
            </span>
            <span className="text-sm font-medium mt-[8px] w-[198px] text-[#485659]">
              Gestão dos Contratos em tempo real e observa dados.
            </span>
            <div className="flex justify-end w-[210px]">
              <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition font-bold ease-in-out py-[6px] px-4 max-w-[95px] rounded-lg mt-[10px] text-xs">
                Saber mais
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Solution;
