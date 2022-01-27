import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Components/Row.css'
import Loading from './Loading';

const baseUrl = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLarge=false}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)

            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl]);

    console.log(movies);


    return <div className='row'>
        <h2>{title}</h2>

        <div className="posters">
            {isLarge?movies.map(movie =>(
                <img key={movie.id} className='lPoster' src={baseUrl.concat(movie.poster_path)} alt={movie.name} />
            )):movies.map(movie => (
                
                <div className="posterDiv">
                    <img key={movie.id} className='poster' src={baseUrl.concat(movie.backdrop_path)} alt={movie.name} />
                    <div className="movieName">
                        <span className="name">{movie.name?movie.name:movie.title}</span>
                    </div>
                </div>
            ))}
            {}
        </div>
    </div>
}

export default Row;
