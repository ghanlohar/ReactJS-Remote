import React, { useState, useEffect } from 'react';
import PlayAgain from "./PlayAgain";
import PlayTimer from "./PlayTimer";
import PlayNumber from "./PlayNumber";
import utils from "../math-utils.js";

/**
 * This is a custom hook for game state **/
const useGameState = () => {
    const [stars, setStars] = useState( utils.random(1,9) );
    const [availableNums, setAvailableNums] = useState( utils.range(1, 9) );
    const [candidateNums, setCanditateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
          const timerId = setTimeout(() => {
              setSecondsLeft(secondsLeft - 1);
          }, 1000);
          return () => clearTimeout(timerId);
        }
      });  

      const setGameState = (newCandidateNums) =>
      {
        let newAvailableNums = availableNums.filter((obj) => { return newCandidateNums.indexOf(obj) == -1; });
        if( utils.sum(newCandidateNums) === stars)
        {
            
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCanditateNums([]);
        }
        else
        {
            setCanditateNums(newCandidateNums);
        }
      }
 
    return {stars, availableNums, candidateNums, secondsLeft, setGameState, setCanditateNums};
}


const Game = (props) => {
    const {stars, availableNums, candidateNums, secondsLeft, setGameState, setCanditateNums} = useGameState();
    

    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0 
  	? 'won'
    : secondsLeft === 0 
    ? 'lost' :
     'active'  
    
    const addToCandidateNums = (selectedNumber, status) => {
        if(gameStatus !== 'active' || status === 'used')
        {
            return;
        }
        console.log('addToCandidateNums ' + selectedNumber);

        const newCandidateNums =
        status === 'available'
          ? candidateNums.concat(selectedNumber)
          : candidateNums.filter(cn => cn !== selectedNumber);
       
        setGameState(newCandidateNums);
    }

    
    const numberStatus = (number) => {
       
      if (candidateNums.includes(number)) {
          return candidatesAreWrong ? 'wrong': 'candidate';
      }
      if (!availableNums.includes(number)) {
          return 'used';
      }
      return 'available';
    };

    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
              {gameStatus !== 'active' ? 
              //generates play again buttons in left block
              (
                  <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
              )
              : 
              //generates random stars in left block
              (
                  utils.range(1, stars).map( (starId)=> <div key={starId} className="star" />)
              )}
          </div>
          <div className="right">
              {utils.range(1, 9).map( (number)=> 
                  <PlayNumber 
                      status={numberStatus(number)} 
                      key={number} 
                      number={number}
                      addToCandidateNums={addToCandidateNums}
                      /> 
              )}
          </div>
        </div>
        <PlayTimer secondsLeft={secondsLeft}/>
      </div>
    );
  };
  

  export default Game;