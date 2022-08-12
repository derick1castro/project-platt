import React from 'react'
import img from '../../../assets/base.png'
import img2 from '../../../assets/logo.png'

const Login = () => {
  return (
    <main className=''>
        <section className='h-[700px] w-[1200px] flex'>
            <div className='border rounded-l-lg w-[550px] h-full items-center flex flex-col'>
                <div className='py-[50px]'>
                    <img className='w-[200px]' src={img2} alt="" />
                </div>
                <div className='p-6 w-[332px] pb-[80px] border rounded-lg'>
                    <h1 className='text-3xl font-bold pb-5'>Log in</h1>
                    <form className='flex flex-col w-[100%]'>
                        <label className='text-sm m-1' htmlFor="email">Email</label>
                        <input className='border rounded-lg px-2 h-[40px] mb-5' type="text" id='email' placeholder='Digite o seu email' />
                        <label className='text-sm m-1' htmlFor="password">Senha</label>
                        <input className='border rounded-lg px-2 h-[40px] mb-5' type="text" id='password' placeholder='Digite a sua senha' />
                    </form>
                    <div className='flex justify-between text-sm'>
                        <div className='pb-5 flex items-center'>
                            <input type="radio" id='radio' />
                            <label className='pl-1' htmlFor="radio">Lembrar acesso</label>
                        </div>
                        <a href="/google.com"><p className='hover:text-[#009CC2] transition ease-out duration-400'>Esqueceu a senha ?</p></a>
                    </div>
                    <button className='rounded-lg font-bold text-white py-3 w-[100%] bg-[#009CC2] hover:bg-[#00556b] transition ease-out duration-400'>Log in</button>
                </div>
            </div>
            <div className='w-[650px] rounded-r-lg'>
                <img className='w-[650px] h-full rounded-r-lg' src={img} alt="" />
            </div>
        </section>
    </main>
//    <div className='flex border rounded-lg w-[1200px] h-[800px]'>
//      <div className='flex items-center'>
//         <div >
//             <div className='ml-[100px] mb-[125px]'>
//                 <div className=''>
//                     <img className='mx-auto mb-[50px]' src={img2} alt="" />
//                 </div>
//                 <div className='border rounded-lg w-full'>
//                     <div className='m-8 '>
//                         <h1 className='mb-5 font-bold text-3xl text-[#111827]'>Log in</h1>
//                         <form className=''>
//                                 <label className='flex text-sm text-[#6B7280]' htmlFor="email">Email</label>
//                                 <input  className='rounded border my-1 h-[40px] w-[320px] p-3' type="text" name='email' id='email' placeholder='Digite o seu e-mail' />
//                                 <label className='mt-5 flex text-sm text-[#6B7280]' htmlFor="email">Senha</label>
//                                 <input className='rounded border my-1 h-[40px] w-[320px] p-3' type="number" placeholder='Digite a sua senha' />
//                                 <div className='flex justify-between my-5'>
//                                     <div className=''>
//                                         <input className='' type="checkbox" id='frase' />
//                                         <label className='mx-3 text-[#6B7280]' htmlFor="frase">Lembrar acesso</label> 
//                                     </div>
//                                     <div className=''>
//                                        <p><a className='text-[#111827] hover:text-[#009CC2]' href="/">Esqueceu a senha?</a></p>
//                                     </div> 
//                                 </div>
//                                 <button className='text-[#FFFFFF] mb-[50px] font-bold py-3 bg-[#009CC2] hover:bg-[#006079] rounded-lg w-[320px] transition ease-out duration-400 '>Log in</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         <div className='pl-[100px]'>
//             <img className=' rounded-lg h-[800px] w-[900px]' src={img} alt="" />
//         </div>
//     </div>
  )
}

export default Login