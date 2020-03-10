import React, { useState } from 'react';
import "../index.css";
import Game from './Game'

const StarsMatch = () => {
    const [gameId, setGameId] = useState(1);
    return (
    <div>
    <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
    </div>
    )
  }

  export default StarsMatch;