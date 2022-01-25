import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './requests'

function App() {

  return (
    <div className="App">
      <h1>Hey, There! It's a Netflix Clone</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
