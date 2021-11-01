export  const makeFavorite = (data)=>{
    return {
        type: "SET_FAV",
        payload: data
    }
}