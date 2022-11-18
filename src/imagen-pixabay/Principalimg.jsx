import Pintadoimg from './components/Pintadoimg'
import Inputimg from './components/Inputimg'
import React, { useState } from 'react'


const Principalimg = () => {
    const [childValue,setChildValue]=useState('')
    function getValue(value){
        setChildValue(value)
    }
  return (
   
    <div>
       <h1>Proyecto buscador Img G18</h1>
       <Inputimg getValue={getValue} ></Inputimg>
       <Pintadoimg valor={childValue}></Pintadoimg>
    </div>
  )
}

export default Principalimg
