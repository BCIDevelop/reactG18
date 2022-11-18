 const getApi=  async (valor)=>{
    try {
        const response=await fetch(`https://pixabay.com/api/?key=23400745-88c9fb4b47626b42faf23986e&q=${valor}&per_page=50`)
        const data= await response.json()
        return data 
    } catch (error) {
        console.log(error.message)
    }
  
        
}
export default getApi