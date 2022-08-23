import api from "../../../utils/api"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import logo from '../../../assets/logo.png'

import Navbar from "../../layout/Navbar"

import useFlashMessage from "../../../hooks/useFlashMessage"

const MinhasSolucoes = () => {
    const [solucoes, setSolucoes] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlashMessage} = useFlashMessage

    useEffect(() => {
        api.get('/solucoes/minhassolucoes', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        .then((response) => {
            setSolucoes(response.data.solucoes)
        })
    }, [token])

    async function removeSolucao(id) {
        let msgType = 'success'

        const data = await api.delete(`/solucoes/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            const updatedSolucoes = solucoes.filter((solucao) => solucao._id != id)
            setSolucoes(updatedSolucoes)
            return response.data
        }).catch((err) => {

            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message, msgType)
    }

  return (
    <>
        <Navbar />
        <section>
            <div className="flex justify-end bg-[#001c23]">
                <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-3 m-[20px] px-8 rounded-md text-md">
                    <Link to="/solucoes/add">Nova solução</Link>
                </button>
            </div>
                 <div className="flex w-[95%] ml-[100px] space-x-20 mt-[70px]">
                    <p className="text-[#009cc2] text-2xl font-medium">Título</p>
                    <p className="text-[#009cc2] text-2xl font-medium">Indtech</p>
                </div> 
                <div className="w-[95%] flex justify-center">
                    <div className="w-[90%]">
                        
                        
                        {solucoes.length > 0 && solucoes.map((solucao) => (
                                <div className=" flex items-center justify-between h-[50px] border-b-2" key={solucao._id}>
                                    <div className="flex space-x-20">
                                        <div>
                                            <span className="font-bold"> {solucao.titulo}</span>
                                        </div>
                                        
                                        <div>
                                            <span className="font-semibold"> {solucao.indtech}</span>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded-md mr-6" onClick={() => {
                                            removeSolucao(solucao._id)
                                        }}>Excluir</button>
                                        <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded-md mr-6"><Link to={`/solucoes/edit/${solucoes._id}`}>Editar</Link></button>
                                    </div>
                                    
                                </div>
                            ))
                        }
                        {solucoes.length === 0 && <p>Não há Soluções cadastradas</p>}
                    </div>
                    {/* <div>
                        
                        {solucoes.length > 0 && solucoes.map((solucao) => (
                                <div className=" h-[50px]" key={solucao._id}>
                                    <span> {solucao.indtech}</span>
                                </div>
                            ))
                        }
                        {solucoes.length === 0 && <p>Não há Soluções cadastradas</p>}
                    </div>
                    <div>
                        <button>Editar</button>
                        <button>excluir</button>
                    </div> */}
                </div>
            
            {/* <div className="items-center flex justify-center flex-col">
                <h1 className="text-4xl font-bold">Minhas Soluções</h1>
                <p className="text-2xl">Filtros</p>
            </div>

            <div className="flex justify-end">
                <button className="border-black bg-[#009cc2] py-4 px-6 rounded-xl text-xl mr-6">
                    <Link to="/solucoes/add">Cadastrar Solução</Link>
                </button>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-[500px] flex flex-col items-center align-tems bg-[#777676]">
                    {solucoes.length > 0 &&
                        solucoes.map((solucao) => (
                            <div className="flex h-[250px]" key={solucao._id}>
                                <img className=" object-cover w-[75px]" src={logo} alt={solucoes.name}/>
                                <span> {solucao.titulo}</span>
                            </div>
                        ))
                    }
                    {solucoes.length === 0 && <p>Não há Soluções cadastradas</p>}
                </div>
            </div> */}
        </section>
    </>

  )
}

export default MinhasSolucoes