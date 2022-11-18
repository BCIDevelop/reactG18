import {useState} from 'react'
import FetchUser from '../service/Export'

function Git(){

    const [search,setSearch]=useState('')
    const [user,setUser]=useState({})
    
function   buscarUsuario(){
     
           FetchUser(search).then((resultado)=>{
               setUser(resultado)
           })
      
      
    }

    
    return(

        <div className='App'>
            <div className='container'>

            <h1 >Buscador Github</h1>
            <div className='grid'>
                <input onChange={e=>setSearch(e.target.value)} type="text" placeholder='Ingresa usuario' />
            </div>
            <div>
                <button className='' onClick={e=>buscarUsuario()}>Buscar</button>
            </div>
            <article>
                <div>
                    <img src={user.avatar_url} alt="" />
                    <h4>{user.name}</h4>
                    <p>{user.bio}</p>
                </div>
            </article>
            </div>
        </div>
    )
}
export default Git