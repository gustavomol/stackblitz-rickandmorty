import React, {useState, useEffect} from 'react';
import './style.css';

export default function App() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
    .then(episodes => setEpisodes(episodes.results))
  }, [])


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {episodes.map(episode => (
        <p> {episode.name + ", " + episode.created} </p>
      )) }
    </div>
  );
}
