import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";
import emptyocean from './emptyocean.jpg'
import leviathan from './leviathan.jpg'
import entrnace from './entrance.jpg'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const [count, setCount] = useState(5);

  const [gameOver, setGameOver] = useState(false);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const restartGame = () => {
    setBoard(["?", "?", "?", "?", "?", "?", "?", "?", "?"]);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setCount(5);
    setGameOver(false);
  };

  const handleSquareClick = (clickedSquareIndex) => {
    if (gameOver) {
      return;
    }
    //varibale holding copy of current state
    // [...] <-- spread operator makes copy of whatever we tell it too in this case board.
    let updatedBoard = [...board];
    // set condition for if treasure location is same as clikced squares index show treasure
    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at the index to treasure emoji
      updatedBoard[clickedSquareIndex] =<img src={entrnace} alt= "entrance" />;;
      alert("You found the entrance to Atlantis! History will remember your name !");
      setGameOver(true);
      //setBoard(updatedBoard)
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = <img src={leviathan} alt= "monster" />;
      alert("Your ship/sub was destroyed by the Leviathan! Better luck next time!");
      setGameOver(true);
      //setBoard(updatedBoard)
    } else {
      //use index from clickedSquareIndex to update the clicked squares
      updatedBoard[clickedSquareIndex] = <img src={emptyocean} alt= "ocean" />;
      setCount(count - 1);
      //update state with the new board
      if (count === 1) {
        alert(
          "Game Over!! You're ship/sub sunk to the bottom of the ocean. Would you like to play again?"
        );
        setGameOver(true);
      }
    }

    setBoard(updatedBoard);
  };

  return (
    <>
      <h1>Searching For Atlantis</h1>

      <div className="board">
        {board.map((value, index) => {
          console.log(value, index);
          return (
            <Square
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>

      <p className="countdown">{count} Attemps Left</p>
      
      <button className="buttons" onClick={restartGame}>
        Restart Game
      </button>

      <footer> Made by Jean Aragon</footer>
    </>
  );
};

export default App;
