import React, { useState } from 'react'
import ComponenteModal from './ComponenteModal'

const Modal = ( { children, btnText }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <div>

        <button className="text-white bg-[#00abd6] hover:bg-[#005469] duration-400 transition ease-in-out py-3 my-[20px] mr-[50px] px-8 rounded-md text-md" onClick={() => setIsModalVisible(true)}>
           {btnText}
        </button>
        
        {isModalVisible ? 
            <ComponenteModal onClose={() => setIsModalVisible(false)}>
                {children}
            </ComponenteModal> : null}
    </div>
  )
}

export default Modal