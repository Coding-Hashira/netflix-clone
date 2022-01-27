import React, {useState} from 'react';
import './App.css';
import Row from './Components/Row';
import {requests} from './requests';
import Banner from './Components/Banner'

function App() {

  return (
    <div className="App">
        {/* Nav */}

        <Banner/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarge={true}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Top Action" fetchUrl={requests.fetchAction}/>
        <Row title="Top Adventure" fetchUrl={requests.fetchAdventure}/>
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Top Comedy" fetchUrl={requests.fetchComedy}/>
        <Row title="Top Horror" fetchUrl={requests.fetchHorror}/>
    </div>
    )

}

export default App;
