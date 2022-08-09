import React from 'react'
import img from '../assets/base.png'
import img2 from '../assets/logo.png'

const Login = () => {
  return (
   <div className='flex border rounded-lg w-[1200px] h-[800px]'>
     <div className='flex items-center'>
        <div >
            <div className='ml-[100px] mb-[125px]'>
                <div className=''>
                    <img className='mx-auto mb-[50px]' src={img2} alt="" />
                </div>
                <div className='border rounded-lg w-full'>
                    <div className='m-8 '>
                        <h1 className='mb-5 font-bold text-3xl text-[#111827]'>Log in</h1>
                        <form className=''>
                                <label className='flex text-sm text-[#6B7280]' htmlFor="email">Email</label>
                                <input  className='rounded border my-1 h-[40px] w-[320px] p-3' type="text" name='email' id='email' placeholder='Digite o seu e-mail' />
                                <label className='mt-5 flex text-sm text-[#6B7280]' htmlFor="email">Senha</label>
                                <input className='rounded border my-1 h-[40px] w-[320px] p-3' type="number" placeholder='Digite a sua senha' />
                                <div className='flex justify-between my-5'>
                                    <div className=''>
                                        <input className='' type="checkbox" id='frase' />
                                        <label className='mx-3 text-[#6B7280]' htmlFor="frase">Lembrar acesso</label> 
                                    </div>
                                    <div className=''>
                                       <p><a className='text-[#111827] hover:text-[#009CC2]' href="/">Esqueceu a senha?</a></p>
                                    </div> 
                                </div>
                                <button className='text-[#FFFFFF] mb-[50px] font-bold py-3 bg-[#009CC2] hover:bg-[#006079] rounded-lg w-[320px] transition ease-out duration-400 '>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div className='pl-[100px]'>
            <img className=' rounded-lg h-[800px] w-[900px]' src={img} alt="" />
        </div>
    </div>
  )
}

export default Login