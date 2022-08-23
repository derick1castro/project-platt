import React from 'react'
import api from '../../../utils/api'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from '../../layout/Navbar'
import useFlashMessage from "../../../hooks/useFlashMessage"
import Modal from '../../Modal/Modal'
import Register from '../Auth/Register'

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

            <div className="flex justify-end bg-[#001c23]">
                <Modal><Register/></Modal>
            </div>

            <nav className=''>
                <ul className='flex items-center list-none m-[50px] space-x-8'>
                    <li className='cursor-pointer font-medium py-2 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]'>
                        <Link className='max-w-[62px]' to="/register">Usuários</Link>
                    </li>
                    <li className='cursor-pointer font-medium py-2 text-[#68787b] hover:text-[#00abd6] transition ease-in-out duration-400 hover:border-b-2 hover:border-[#00abd6]'>
                        <Link to="/register">Convites</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <span className='text-2xl font-bold text-[#00abd6] ml-[50px]'>Braskem</span>
            </div>

            {users.length > 0 && users.map((user) => (
            <div className='flex items-center justify-between mx-[50px] mt-[20px] border-b-2 border-[#737272] pb-3 text-md' key={user._id}>                            
                <span className='font-medium text-xl'> {user.name}</span>
                <span> {user.email}</span>
                <span>hora</span>
                <div className='flex'>
                    <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-3">Excluir</button>
                    <button className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-2 px-4 rounded mr-6">Editar</button>
                </div>
                                                                            
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