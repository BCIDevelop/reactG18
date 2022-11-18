import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
  import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from 'react-router-dom';
import './header.css'

 function Header(){
    return(
        <>
      
        <nav className='navbar'>
            <h2><Link style={{ textDecoration: 'none',color:'#222' }} to="/">Logo</Link></h2>
            <ul className='lista-nav'>
                <li><Link style={{ textDecoration: 'none',color:'#222' }} to="/pokemon">PokeApi</Link></li>
                <li><Link style={{ textDecoration: 'none',color:'#222' }} to="/pixabay">Buscador</Link></li>
            </ul>
        </nav>
   
               
      
       
  
     
      </>
  )
 }
 export default Header