import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header  from './components/Header/header'
import Git from './gitSearch/Git'
import Router from './router/router'
import {UserProviderLogin} from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <UserProviderLogin>

     <Router/>
     </UserProviderLogin>

  </React.StrictMode>
)
