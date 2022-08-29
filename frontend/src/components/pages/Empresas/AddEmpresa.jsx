import React from 'react'
import Input from '../../form/Input'

function AddEmpresa() {
    
  return (
    <>
        <div className='space-y-9 mt-[50px]'>
            <h1 className='text-3xl text-[#009cc2] font-bold'>Nova Empresa</h1>
            <h2 className='text-[#009cc2] font-bold'>Dados da empresa</h2> 
        </div>
        <Input 
            text='Identificação'
            type='text'
            name='empresa'
            placeholder='Adicionar Empresa'
            // handleOnChange={handleChange}
        />
    </>
     
  )
}

export default AddEmpresa