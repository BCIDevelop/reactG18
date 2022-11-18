import React, { useState } from 'react'


const Inputimg = ({getValue}) => {
    const [img,setImg]=useState('')
    function buscarImg(e){
        e.preventDefault()
        const inputValue=document.querySelector('input').value
     
        setImg(inputValue)
        console.log(img)
        getValue(inputValue)
    }
  return (
    <div>
      <form onSubmit={buscarImg} action="">
        <input type="text" />
        <button type='submit' >Buscar</button>
      </form>
     
    </div>
  )
}

export default Inputimg
