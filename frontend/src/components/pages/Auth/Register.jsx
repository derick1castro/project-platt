import Input from '../../form/Input'
import React from 'react'
import Navbar from '../../layout/Navbar'
import Container from '../../../components/layout/Container'
import Message from '../../layout/Message'

import {useState, useContext} from 'react'

//contexts
import {Context} from '../../../context/UserContext'

const Register = () => {
    const [user, setUser] = useState({})
    const {register} = useContext(Context)

    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value})

    }

    function handleSubmit(e) {
        e.preventDefault()
        register(user)
        
    }

  return (
    <>
        <Container>
        <Message />
            <section className='max-w-[350px] mx-auto'>
                <h1 className='text-[#009CC2] text-3xl font-bold my-10'>Convite</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                    text="Nome Completo"
                    type="text"
                    name="name"
                    placeholder="Ex: Derick Castro Domingos"
                    handleOnChange={handleChange}
                    />
                    <Input
                    text="E-mail"
                    type="text"
                    name="email"
                    placeholder="Ex: derick.domingos@timenow.com.br"
                    handleOnChange={handleChange}
                    />
                    <Input
                    text="Digite o telefone"
                    type="text"
                    name="phone"
                    placeholder="Ex: 3333-3333"
                    handleOnChange={handleChange}
                    />
                    <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a senha"
                    handleOnChange={handleChange}
                    />
                    <Input
                    text="Confirmação da senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a senha"
                    handleOnChange={handleChange}
                    />
                    <button className='bg-[#009CC2] p-3 text-white px-5 rounded mt-4' type='submit'>Cadastrar usuário</button>
                </form>
            </section>
        </Container>
    </>
  )
}

export default Register