import  {React, useContext } from 'react'
import image from './pngtree-finance-app-page-geometric-background-banner-image_157396.jpg'
import image2 from './forest-jungle-tree-svgrepo-com.svg'
import './login.css'
import Swal from 'sweetalert2'
import { UserContext } from '../../context/UserContext'






const Login = () => {
  /* function handleClick(e){
    e.preventDefault()
    setUser({name:'Anonymous'})
  } */
 
 const {user,storeUser,removeUser}=useContext(UserContext)
  const username=[{name:'luis',password:'luislo'}]
  function submitForm(e){
    e.preventDefault()
    const value1=document.querySelector('#value1').value
    const value2=document.querySelector('#value2').value
    const valorUsuario=username.find((element)=>{
       return element.name=== value1
    })
    console.log(valorUsuario)
    if(valorUsuario!= undefined){
       if(valorUsuario.password!==value2){
        console.log('no es la clave')
        Swal.fire({
          icon:'error',
          title: 'Error!',
          text:'no es la clave'
        })
       }else{
        storeUser(valorUsuario)
       }
    } 
    else  {
      console.log('no hay usuario')
      Swal.fire({
        icon:'error',
        title: 'Error!',
        text:'no hay usuario'
      })
  }
  }
  function cerrarSesion(){
    localStorage.clear()
    removeUser()
  }
  return (
    <div className='login-page'>
        <div className='section1'>
            <img className='img-login' src={image} alt="" />
        </div>
        <div  className='section2'>
           <div className='card'>
              <div>
              <img src={image2} alt="" />
               </div>
                <h2>Hello! </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, provident.</p>
           </div>
            <form onSubmit={submitForm} className='form-login' action="">
              <div>

                <input id='value1' className='input-login' type="text" placeholder='Username' />
              </div>
              <div>

                <input id='value2' className='input-login' type="password" placeholder='Password' />
              </div>
                <button /* onClick={handleClick} */ className='button-login' type='submit'>Login</button>
            </form>
            <button className='cerrar' onClick={cerrarSesion}>Cerrar sesion</button>
        </div>
    </div>
  )
}

export default Login
