import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';



export default function FavMovies() {
    let movies = useSelector((state) => state);
    const source = "https://image.tmdb.org/t/p/w500"
    const [movie, setMovie] = useState([])

    const removeMove = (e, id) => {
        e.preventDefault();
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === id) {
                movies =  movies.splice(i, 1)
            }
        }
        setMovie([...movies])

    }
    useEffect(()=>{
        setMovie([...movies])
    },[movies])


    return (<>
        {(movie === []) ? <div>Loadding...</div> : <div className="container"><div className='row m-4'>{
         movie.map((movie) => {
            return (
                        <div className="col-4">
                        <div class="card mb-3" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={`${source}/${movie.poster_path}`} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text text-center text-primary">{movie.title}</p>
                            </div>
                            <button className="btn btn-danger w-75  mx-auto mb-2" onClick={(e,id=movie.id)=>{removeMove(e,id)}}> Remove</button>
                        </div>
                        </div>
                      
            )
        })
        
        }</div></div> }

    </>);
}
