import React from 'react'
import Navbar from '../../layout/Navbar'
import ModalBarra from '../../layout/ModalBarra'
import { Link } from "react-router-dom"
import AddEmpresa from './AddEmpresa'

function Empresas() {
    async function removeSolucao() {
        
    }
  return (
    <section>
        <Navbar />
        <ModalBarra text='Cadastrar Empresa'><AddEmpresa /></ModalBarra>
        {/* <div className='space-y-9 mt-[50px]'>
            <h1 className='text-3xl text-[#009cc2] font-bold'>Nova Empresa</h1>
            <h2 className='text-[#009cc2] font-bold'>Dados da empresa</h2> 
        </div>
        <Input 
            text='Identificação'
            type='text'
            name='empresa'
            placeholder='Adicionar Empresa'
            // handleOnChange={handleChange}
        /> */}
        <div className='flex items-center justify-between mx-[50px] mt-[20px] border-b-2 border-[#737272] pb-3 text-md'>
            <div className="space-x-[125px]">
                <span className='font-medium text-xl'>Braskem</span>
                <span className="">03</span>
            </div>
            <div>
                <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-3" onClick={() => {
                    removeSolucao()
                }}>Excluir</button>
                <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-6"></button>
            </div>
        </div>

        {/* Quando não houver empresa */}
        {/* <section className="h-[91vh]" >
             <div className='flex flex-col items-center justify-center h-full space-y-2'>
            <p>Ainda não há soluções cadastrados no sistema.</p>
            <p>Deseja cadastrar novas soluções?</p>
            <div>
                <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-3 m-[30px] px-8 rounded-md text-md">
                    <Link to="/solucoes/add">Cadastrar Empresa</Link>
                </button>
            </div>
        </div>
        </section> */}
        
    </section>
  )
}

export default Empresas