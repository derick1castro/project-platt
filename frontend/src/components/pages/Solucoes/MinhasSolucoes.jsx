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

  return (
    <>
        <Navbar />
        <section>
            
            <div>
                <h1>Minhas Solucões</h1>
                <Link to="/solucoes/add">Cadastrar Solução</Link>
            </div>
            
            <div>
                {solucoes.length > 0 && <p>Minhas Soluções cadastradas</p>}
                {solucoes.length === 0 && <p>Não há Soluções cadastradas</p>}
            </div>
        </section>
    </>
    
  )
}

export default MinhasSolucoes