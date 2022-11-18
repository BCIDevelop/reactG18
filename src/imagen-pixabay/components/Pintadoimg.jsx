import React from 'react'
import getApi from '../helpers/consumoApi'
import Imgitems from './Imgitems'
import { useState,useEffect } from 'react'
const Pintadoimg = ({valor}) => {
    const [infoApi,setInfoApi]=useState([])
    useEffect(()=>{
        getApi(valor).then((newImage)=>{
            setInfoApi(newImage.hits)
            console.log(newImage)
        })
    },[valor])
  return (
    <div>
       {infoApi.length>0?(infoApi.map((element,index)=>{
            return <Imgitems key={element.id} previewUrl={element.previewURL}></Imgitems>
       })): 
       <h2>NO hay imagenes</h2>
       } 
    
    </div>
  )
}

export default Pintadoimg
