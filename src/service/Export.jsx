const FetchUser=async (search)=>{
   console.log(search)
    return fetch(`https://api.github.com/users/${search}`).then(async (resultPromise)=>{
       
       const data=  await resultPromise.json()
       return data
    })
  
}

export default FetchUser