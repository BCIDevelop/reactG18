 function Api(url='https://pokeapi.co/api/v2/pokemon?limit=200'){
    const BASE_URL='https://pokeapi.co/api/v2/pokemon?limit=200'
    return fetch(url).then(async(result)=>{
     
        const data=await result.json()
        return data
    }).catch((error)=>{
        console.log(error.message)
    })
}
export default Api