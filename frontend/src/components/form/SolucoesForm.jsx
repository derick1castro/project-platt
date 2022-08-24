import {useState} from 'react'

import Input from './Input'

const SolucoesForm = ({handleSubmit, solucoesData, btnText}) => {
    const [solucoes, setSolucoes] = useState(solucoesData || {})
    const [preview, setPreview] = useState([])

    function onFileChange(e) {
        setPreview(Array.from(e.target.files))
        setSolucoes({...solucoes, images: [...e.target.files]})
    }

    function handleChange(e) {
        setSolucoes({...solucoes, [e.target.name]: e.target.value})
    }

    function submit(e) {
        e.preventDefault()
        console.log(solucoes)
        handleSubmit(solucoes)
    }


  return (
    <>
        <section className='max-w-[80%] mx-auto text-[#009cc2] space-y-8'>
            <h1 className='text-3xl font-bold'>Nova Solução</h1>
            <form className='space-y-7' onSubmit={submit}>
                <p className='text-xl font-bold'>Resumo</p>
                <Input 
                    text='Título da Solução'
                    type='text'
                    name='titulo'
                    placeholder='Add text'
                    handleOnChange={handleChange}
                    value={solucoes.titulo || ''}
                />

                <Input 
                    text='Descrição da solução com X caracteres'
                    type='text'
                    name='descricao'
                    placeholder='Add text'
                    handleOnChange={handleChange}
                    value={solucoes.descricao || ''}
                />

                <Input 
                    text='Indtech que realiza'
                    type='text'
                    name='indtech'
                    placeholder='Add text'
                    handleOnChange={handleChange}
                    value={solucoes.indtech || ''}
                />

                <Input 
                    text='Características'
                    type='text'
                    name='caracteristicas'
                    placeholder='Add text'
                    handleOnChange={handleChange}
                    value={solucoes.caracteristicas || ''}
                />

                <Input 
                    text='Dores que atende'
                    type='text'
                    name='dores'
                    placeholder='Add text'
                    handleOnChange={handleChange}
                    value={solucoes.dores || ''}
                />

                <p className='pt-8 text-xl font-bold'>Case</p>

                <Input 
                    text='Depoimentos'
                    type='text'
                    name='depoimentos'
                    placeholder='Add text'
                    handleOnChange={handleChange}
                    value={solucoes.depoimentos || ''}
                />

                <Input 
                    text='Autor do Depoimento'
                    type='text'
                    name='autorDepoimento'
                    placeholder='Add text'
                    handleOnChange={handleChange}
                    value={solucoes.autorDepoimento || ''}
                />

                <Input 
                    text='Link para case (opcional)'
                    type='text'
                    name='linkCase'
                    placeholder='Add text'
                    handleOnChange={handleChange}
                    value={solucoes.linkCase || ''}
                /> 

                <div>
                    <p className='flex text-xl font-bold'>Clientes</p>
                    <div className='flex justify-center mb-4 space-x-4 mt-4'>
                    {preview.length > 0
                        ? preview.map((image, index) => (
                            <img className='w-[200px] h-[200px]' src={URL.createObjectURL(image)} alt={solucoes.titulo} key={`${solucoes.titulo} + ${index}`} />
                        )) :
                        solucoes.images && 
                        solucoes.images.map((image, index) => (
                            <img src={`${process.env.REACT_APP_API}/images/solucoes/${image}`} alt={solucoes.titulo} key={`${solucoes.titulo} + ${index}`} />
                        ))}
                </div>
                
             </div>
               
                <Input 
                    text='Imagens dos clientes'
                    type='file'
                    name='images'
                    handleOnChange={onFileChange}
                    multiple
                /> 

                <input type="submit" value={btnText}/>
            </form>
        </section>
    </>
   
  )
}

export default SolucoesForm