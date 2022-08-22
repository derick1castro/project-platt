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
            setUsers(response.data.users)
        })
    }, [token])

  return (
    <>
    {/* <Navbar />
    console.log(user)
    {users > 0 && users.map((user) => (
        <div key={user._id}>                            
            <span> {user.name}</span>
            <span> {user.email}</span>                                                            
        </div>
     ))
    }
    {users === 0 && <p>Não há usuários cadastradas</p>}
                         */}
    </>
  )
}

export default User