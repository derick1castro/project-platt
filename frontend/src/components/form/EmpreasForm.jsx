import React, { useState }  from 'react'
import Input from './Input'

function EmpreasForm({ handleSubmit, companyData, btnText}) {
    const [company, setCompany] = useState(companyData || {})

    function handleChange(e) {

    }

  return (
    <section>
        <div className='space-y-9 mt-[50px]'>
          <h1 className='text-3xl text-[#009cc2] font-bold'>Nova Empresa</h1>
          <h2 className='text-[#009cc2] font-bold'>Dados da empresa</h2> 
        </div>
        <form >
            <Input 
            text='Identificação'
            type='text'
            name='empresa'
            placeholder='Adicionar Empresa'
            handleOnChange={handleChange}
            value={company.name | ''}
            />
        </form>
        <input type="submit" value={btnText} className="text-white bg-[#009cc2] hover:bg-[#005469] duration-400 transition ease-in-out py-3 m-[30px] px-8 rounded-md text-md"/>
       
    </section>
  )
}

export default EmpreasForm