import React from 'react'
import api from '../../../utils/api'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from '../../layout/Navbar'
import useFlashMessage from "../../../hooks/useFlashMessage"

const User = () => {
    const [users, setUsers] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlashMessage} = useFlashMessage
    

    useEffect(() => {
        api.get('/users/usuarios', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
        .then((response) => {
            setUsers(response.data.user)
        })
    }, [token])

  return (
    <>
        <Navbar />
        <section className='h-[91vh]'>
            {users.length > 0 && users.map((user) => (
            <div key={user._id}>                            
                <span> {user.name}</span>
                <span> {user.email}</span>                                                            
            </div>
            ))}
            {users.length === 0 &&
            <div className='flex flex-col items-center justify-center h-full space-y-2'>
                <p>Ainda não há usuários cadastrados no sistema</p>
                <p>Deseja convidar novos usuários?</p>
                <div>
                     <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-3 m-[30px] px-8 rounded-md text-md">
                    <Link to="/register">Convidar usuários</Link>
                    </button>
                </div>
            </div>
            }              
        </section>    
    </>
  )
}

export default User