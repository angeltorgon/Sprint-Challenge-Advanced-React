import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import useLocalStorage from './hooks/useLocalStorage';
import PlayerCard from './components/PlayerCard';


function App() {
  const [players, setPlayers] = useState([])
  const [ setToStorage, removeFromStorage ] = useLocalStorage()

  useEffect(() => {
    axios.get("http://localhost:5000/api/players")
    .then((res) => {
      setPlayers(res.data)
      setToStorage(JSON.stringify(res.data))
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <h1>Players</h1>
      {
        players.map((player) => {
          return (
          <div>
            <PlayerCard player={player}/>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
