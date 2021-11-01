import React from 'react'
import { useParams } from 'react-router';
import axiosInstance from './../../Network/axiosConfig';
import { useEffect, useState } from "react";

export default function MovieDetails() {
    const [movies, setMovies] = useState([]);
    const params = useParams();
    const source = "https://image.tmdb.org/t/p/w300";
    console.log(params.id)

    useEffect(() => {
        axiosInstance
            .get(`/movie/${params.id}?api_key=450c09235a431ebf2669aff1a58a859a`)
            .then((res) => {
                setMovies(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className='row m-2'>
                <div className="card mb-3 ">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`${source}/${movies.poster_path}`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-primary">{movies.title}</h5>
                                <p className="card-text">{movies.overview}</p>
                                <p className="card-text"><small className="text-muted">Rating : {movies.vote_average}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
