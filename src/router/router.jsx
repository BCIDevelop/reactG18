    import { BrowserRouter,Route,Routes } from "react-router-dom"
    import App from "../App"
    import Git from "../gitSearch/Git"
    import Header from "../components/Header/header"
    import Home from "../pages/pokemon"
    import Flags from "../pages/Flags"
    import Principalimg from "../imagen-pixabay/Principalimg"
    import Login from "../pages/Login/Login"
    import Private from "../private"
    function Router(){
        return(
            <BrowserRouter>
            <Header/>
            <Routes>
            {/*  <Route path="/" element={<App/>}></Route>
                <Route path="/buscador" element={<Git/>}></Route>
                <Route path="/pokemon" element={<Home/>}></Route>
                <Route path="/bandera" element={<Flags/>}></Route>
                <Route path="/pixabay" element={<Principalimg/>}></Route> */}
                <Route path="/" element={<Login/>}></Route>
                
                {/* Rutas privadas */}
                <Route element={<Private></Private>}>
                   <Route path="/pixabay" element={<Principalimg/>}></Route>
                    <Route path="/pokemon" element={<Home/>}></Route>
                </Route>

            </Routes>
            </BrowserRouter>
        )
    }
    export default Router