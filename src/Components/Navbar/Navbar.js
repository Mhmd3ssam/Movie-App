import { Link } from "react-router-dom";
import { useState, useEffect , useRef} from 'react';
import {  useSelector } from 'react-redux'

export default function Navbar() {
    const[movie,setMovie] = useState();
    const elmRef = useRef();
    const counter = useSelector(state => state);

    useEffect(()=>{
        setMovie(elmRef.current.value);
        console.log(movie)
    })
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link class="nav-item nav-link active" to="/">Movies</Link>
                    <Link class="nav-item nav-link" to="/favmovies">Favorites <span className="text-danger">{counter.length}</span> </Link>
                
                </div>
            </div>
            <form class="form-inline my-2 my-lg-0 d-flex justify-content-center">
                <input class="form-control mr-sm-2 mx-1" ref={elmRef} type="search" placeholder="Search" aria-label="Search"/>
                <button class ="btn btn-outline-success my-2 my-sm-0 mx-4" type ="submit">Search</button>
            </form>
        </nav>
    )
}
