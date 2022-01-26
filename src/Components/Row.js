import React, {useState, useEffect} from 'react';
import axios from '../axios';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      console.log(fetchUrl)
        const request = await axios.get(fetchUrl)
        console.log(request)
    }
    fetchData()
  }, []);
  

  return <div className='row'>
      <h2>{title}</h2>

      

      {/* container -> posters */}
  </div>;
}

export default Row;
