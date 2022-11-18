import { useEffect,useState } from "react";
import Api from "../service/Api";
import React from 'react'

import{Container ,Card, CardContent, CardMedia , Grid} from "@mui/material";

const Home = () => {
    const imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
    const [pokemons,setPokemon]=useState([])
    const fetchPokemonList=async ()=>{
        const listPokemon=await Api()
        setPokemon(listPokemon.results)
    }

   
    //Use effect ejecuta l apagina y renderiza lo primero que le de como peticion
    useEffect(()=>{
        fetchPokemonList()
    },[])
    //Al colocar los corchetes terminal la ejecucion
  return (
    <Container>
    <h1>Pokdex</h1>
    <Grid container spacing={3}>
        {/* No es llaves sino parentesis */}
        {pokemons.map((lista,index)=>(
         
        <Grid key={index} item xs={4} md={4} lg={4} sm={12}>
        <Card  className="card-pokemon">
        <CardMedia  component='img' className="img-pokemon" image={`${imgUrl}${index+1}.svg`} />
        <CardContent>
            <h3>{lista.name}</h3>
        </CardContent>                   
        </Card>
        </Grid>
        ))}
   
    </Grid>
</Container>
  )

}

export default Home
