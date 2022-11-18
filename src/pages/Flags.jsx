import React, { useEffect, useState } from 'react'
import Api from '../service/Api'
import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
  } from "@mui/material";
const Flags = () => {
    const flechaCountrie=async ()=>{
        const response= await Api('https://restcountries.com/v3.1/all')
    
        setCountries(response)
    }
    const [countries,setCountries]=useState([])
    const [region,setRegion]=useState('')
    useEffect(()=>{
        flechaCountrie()
    },[])
    function handlerRegion(e){
        setRegion(e.target.value)
        if(e.target.value!=='all') handlerSearchCountries(e.target.value) 
       
    }
    async function handlerSearchCountries (region){
        const response= await Api(`https://restcountries.com/v3.1/region/${region}`)
        setCountries(response)
    }
    function handleSearch(e){
        console.log(e.target.value)
        if(e.target.value!=='') search(e.target.value)
       
    }

    async function search(country){
        const response= await Api(`https://restcountries.com/v2/name/${country}`)
        console.log(response)
        setCountries(response)
  
    }
    return (
        <Container>
       <h1>banderas</h1>
       <Grid container spacing={3}>
        <Grid item md={6}>
        <TextField onChange={handleSearch} label='Buscat tu pais'></TextField>

        </Grid>
        <Grid item md={6}>
            <FormControl fullWidth>
                <InputLabel>Filtra tu continente</InputLabel>
                <Select onChange={handlerRegion} label='Filtra tu continente' value={region}>
                <MenuItem value='all'>Todos los continentes</MenuItem>
                <MenuItem value='Africa'>Africa</MenuItem>
                <MenuItem value='Americas'>America</MenuItem>
                <MenuItem value='Asia'>Asia</MenuItem>
                <MenuItem value='europe'>Europa</MenuItem>
                <MenuItem value='Oceania'>Oceania</MenuItem>
                </Select>
            </FormControl>        
        </Grid>
       
        {/* No es llaves sino parentesis */}
        {countries.length>0?(countries.map((lista,index)=>(
      
        <Grid item xs={4} md={4} lg={4} sm={12} key={index}>
        <Card className="card-pokemon">
        <CardMedia component='img' className="img-pokemon" image={lista.flags.png} />
        <CardContent>
            <h3>{lista.name.common ? lista.name.common: lista.name}</h3>
        </CardContent>                   
        </Card>
        </Grid>

        )))
        : <h2>No hay paises en esa region</h2> 
        
        }
   
    
       </Grid>
    </Container>
      )
}

export default Flags
