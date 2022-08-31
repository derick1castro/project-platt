import React from 'react'
import api from '../../../utils/api'
import { useState } from 'react'
import { usenavigate } from 'react-router-dom'
import useFlashMessage from '../../../hooks/useFlashMessage'
import EmpreasForm from '../../form/EmpreasForm'

function AddEmpresa() {
    
  return (
    <>
      <EmpreasForm btnText='Cadastrar Nova Empresa'/>
    </>
     
  )
}

export default AddEmpresa