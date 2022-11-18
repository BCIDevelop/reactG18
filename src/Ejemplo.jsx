import {useState} from 'react'
import './App.css'
function Ejemplo(){
    const [nombre,setNombre]=useState('luis')
    const apellido='lopez'
    function cambiarNombre(nombreInput){
        setNombre(nombreInput)
    }

    return(
        <div>   
            <h1>Primer componente</h1>
            <p> mi nombre es: <strong className={nombre.length<=4 ? 'verde': 'azul'}>{nombre}</strong> </p>
            <p>mi apellido es {apellido}</p>
            <input onChange={e=>cambiarNombre(e.target.value)} type="text" />
            <button onClick={e=>cambiarNombre('Anonymous')}>Cambia Nombre</button>
        </div>
    )
}
export default Ejemplos