import React from 'react'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/base.png'
import img2 from '../../../assets/logo.png'

//context
import {Context} from '../../../context/UserContext'
import Input from '../../form/Input'

function Login() {

    const [user, setUser] = useState({})
    const {login} = useContext(Context)

    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
      }
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(user)
        login(user)
    }

  return (
    <main className=''>
        <section className='h-[700px] w-[1200px] flex'>
            <div className='border rounded-l-lg w-[550px] h-full items-center flex flex-col'>
                <div className='py-[50px]'>
                    <img className='w-[200px]' src={img2} alt="" />
                </div>
                <div className='p-6 w-[332px] pb-[80px] border rounded-lg'>
                    <h1 className='text-3xl font-bold pb-5'>Log in</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col w-[100%]'>
                        <Input 
                            text='E-mail'
                            type='email'
                            name='email'
                            placeholder='Digite o seu e-mail'
                            handleOnChange={handleChange}
                        />
                        <Input 
                            text='Senha'
                            type='password'
                            name='password'
                            placeholder='Digite a sua senha'
                            handleOnChange={handleChange}
                        />
                    </form>
                    <div className='flex justify-between text-sm'>
                        <div className='pb-5 flex items-center'>
                            <input type="radio" id='radio'/>
                            <label className='pl-1' htmlFor="radio">Lembrar acesso</label>
                        </div>
                        <Link className='hover:text-[#009CC2] transition ease-out duration-400' to='/register'>Esqueceu a senha ?</Link>
                    </div>
                    <input className='rounded-lg font-bold text-white py-3 w-[100%] bg-[#009CC2] hover:bg-[#00556b] transition ease-out duration-400 cursor-pointer' type="submit" value='Log in' />
                </div>
            </div>
            <div className='w-[650px] rounded-r-lg'>
                <img className='w-[650px] h-full rounded-r-lg' src={img} alt="" />
            </div>
        </section>
    </main>
  )
}

export default Login