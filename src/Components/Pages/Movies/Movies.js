import { useState, useEffect, useContext  } from 'react';
import axiosInstance from './../../../Network/axiosConfig';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { makeFavorite } from '../../../store/action';
import { languageContext } from '../../../context/LangContext';



export default function Movies() {
    const [movies, setmovies] = useState([]);
    const source = "https://image.tmdb.org/t/p/w500"
    const history = useHistory();
    const [count, setCount] = useState(1);
    const counter = useSelector(state => state);
    const dispatch = useDispatch()
    const { lang, setLang } = useContext(languageContext);
    const makeFave = (obj)=>{
        dispatch(makeFavorite( obj))
    }

    const moviedetail = (id) => {
        history.push(`/details/${id}`);
    }

    const nextPage = () => {
        setCount(count + 1)
    }

    const prevPage = () => {
        if (count === 0) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

  
    useEffect(() => {
        axiosInstance
            .get(`/movie/popular?api_key=450c09235a431ebf2669aff1a58a859a&page=${count}`)
            .then((res) => {
                setmovies(res.data.results)
            })
            .catch((err) => console.log(err))
    }, [count])

    return (
        <div className="container">
                <button
              className="btn btn-warning text-dark mb-5 fw-bold"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            >
              {lang}
            </button>
            <div className='row m-4'>
                {movies.map((movie) => {
                    return (
                        <div className="col-3">
                            <div className="card" key={movie.id}>
                                <img src={`${source}/${movie.poster_path}`} class="card-img-top" />
                                <div className="card-body mt-3">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.overview.substring(0, 100)}</p>
                                    <button className=" btn btn-sm bg-warning w-25 text-light m-auto" onClick={()=>{makeFave(movie)}}> click</button>
                                    <button className=" btn bg-primary w-100 text-light" onClick={() => moviedetail(movie.id)}> details </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="row m-3 text-center d-flex justify-content-center">
                <button className=" btn bg-warning w-25 mx-3 text-dark outline-success" onClick={() => { prevPage() }}> PREV </button>
                <button className=" btn bg-danger w-25 text-light outline-success" onClick={() => { nextPage() }}>NEXT </button>
            </div>
        </div>

    )
}
