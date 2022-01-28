import React, {useState, useEffect} from 'react';
import axios from '../axios';
import {requests} from '../requests'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState([]);

  const limit = (str, n)=>{
    let nCharStr = str?.length > n ? str.substr(0, n - 1):null;

    if (nCharStr){
        let lastStop = nCharStr?.lastIndexOf(".")

        let finalStr = nCharStr?.slice(0, lastStop+1)
        return finalStr
    } else {
        return str
    }
    
  }

  useEffect(()=>{
    async function fetchData() {
        const request = await axios.get(requests.fetchTrending)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
            );
        return request;
    }

    fetchData()
    console.log(movie);
  }, [])

  return (
    <header className='banner'
      style={{
          backgroundSize:'cover',
          backgroundImage:`url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
    > {/* Bg image */}

        <div className="content">
            <h1 className='bannerTitle'>{movie?.name || movie?.title || movie?.original_title}</h1>
            
            <div className="bannerButtons">
                <button className="bannerButton">Play</button>
                <button className="bannerButton">My List</button>
            </div>
            
            <h1 className="desc">
                {limit(movie?.overview, 250)}
            </h1>
        </div>
        <div className="fadeBottom"></div>
    </header>
  );
}

export default Banner;
