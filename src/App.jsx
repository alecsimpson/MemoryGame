import './App.css'
import {useEffect, useMemo, useState} from "react";
import './components/Header.jsx'
import Header from "./components/Header.jsx";
import GameBoard from "./components/GameBoard.jsx";




function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemon, setPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [subsetSize, setSubsetSize] = useState(16);


  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const res = await response.json()
        setPokemon(res.results)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching pokemon', error)
        setIsLoading(false)
      }
    }
    fetchData();
  }, []);

  if(isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
        setHighscore={setHighScore}
        size={subsetSize}
        setSize={setSubsetSize}
      />
      <GameBoard pokemon={pokemon} score={score} setScore={setScore} size={subsetSize} />
    </>
  )
}

export default App
