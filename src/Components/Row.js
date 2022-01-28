import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Components/Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLarge=false}) {
    
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)

            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl]);

    const handleClick = (movie)=>{
        if (trailerUrl){
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_title || movie?.original_name)
            .then(url =>{
                const urlParams = new URLSearchParams (new URL(url).search)
                
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((err) => console.log(err))
        }
    }
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    console.log(movies);


    return <div className='row'>
        <h2>{title}</h2>

        <div className="posters">
            {isLarge?movies.map(movie =>(
                <img key={movie.id} onClick={() => handleClick(movie)} className='lPoster' src={baseUrl.concat(movie.poster_path)} alt={movie.name} />
            )):movies.map(movie => (
                
                <div className="posterDiv">
                    <img key={movie.id} onClick={() => handleClick(movie)} className='poster' src={baseUrl.concat(movie.backdrop_path)} alt={movie.name} />
                    <div className="movieName">
                        <span className="name">{movie.name?movie.name:movie.title}</span>
                    </div>
                </div>
            ))}
            {trailerUrl && <YouTube className="video" videoId={trailerUrl} opts={opts}/>}
        </div>
    </div>
}

export default Row;
