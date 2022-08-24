import api from "../../../utils/api"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

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
            const updatedSolucoes = solucoes.filter((solucao) => solucao._id !== id)
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
            {solucoes.length > 0 ? 
            <>
            <div className="flex justify-end bg-[#001c23]">
                <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-3 m-[20px] px-8 rounded-md text-md">
                    <Link to="/solucoes/add">Nova solução</Link>
                </button>
            </div>
            
            <div className="flex m-[50px] items-center justify-between mt-[70px]">
                <div className="space-x-[150px] text-[#009cc2] text-2xl font-medium">
                    <span>Título</span>
                    <span>Indtech</span>  
                </div>
                <span></span>
            </div>
            </> : null}
             
            {solucoes.length > 0 ? solucoes.map((solucao) => (
                <div className='flex items-center justify-between mx-[50px] mt-[20px] border-b-2 border-[#737272] pb-3 text-md' key={solucao._id}>
                    <div className="space-x-[125px]">
                        <span className='font-medium text-xl'> {solucao.titulo}</span>
                        <span className=""> {solucao.indtech}</span>
                    </div>
                    <div>
                        <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-3" onClick={() => {
                            removeSolucao(solucao._id)
                        }}>Excluir</button>
                        <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-6"><Link to={`/solucoes/edit/${solucao._id}`}>Editar</Link></button>
                    </div>
                </div>
            )) :  
                <section className="h-[91vh]" >
                    <div className='flex flex-col items-center justify-center h-full space-y-2'>
                        <p>Ainda não há soluções cadastrados no sistema.</p>
                        <p>Deseja cadastrar novas soluções?</p>
                        <div>
                            <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-3 m-[30px] px-8 rounded-md text-md">
                                <Link to="/solucoes/add">Nova solução</Link>
                            </button>
                        </div>
                    </div> 
                </section>
            }
        </section>
    </>
  )
}

export default MinhasSolucoes