import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import ScoreBoard from './components/ScoreBoard'
import GameBoard from './components/GameBoard'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function incrementScore() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }
  
  //Update highscore
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score])

  return (
    <div>
      <NavBar />
      <ScoreBoard score={score} highScore={highScore} />
      <GameBoard incrementScore={incrementScore} resetScore={resetScore}/>
    </div>
  )
}

export default App
