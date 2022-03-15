import Header from "../header/header";
import GameBoard from "../game-board/game-board";
import Keyboard from "../keyboard/keyboard";
import "./main.css";
import React from "react";

let currentGuess = [];
let rowCounter = 0;

const Main = () => {

    const [guesses, setGuesses] = React.useState([]);
   
    

    const handleClick = (value) =>{
        if(value === "enter"){
            console.log(value);
            console.log(currentGuess);
            
            if(currentGuess.length === 5){
                rowCounter++;
                currentGuess = [];
                console.log(rowCounter);
            }
            return;
        }

        if(value === "backspace"){
            currentGuess.pop();
            const newGuesses = [...guesses];
            newGuesses[rowCounter] = currentGuess;
            setGuesses(newGuesses);
            return;
        }
        if(currentGuess.length < 5){
            currentGuess.push(value);
            const newGuesses = [...guesses];
            newGuesses[rowCounter] = currentGuess;
            setGuesses(newGuesses);
        }


        
    }

    return(        
        <div>
            <Header />
            <div className="gameboard-container" >
                <GameBoard guesses={guesses} />
            </div>            
            <Keyboard onClick={handleClick} />           
        </div>
    )
}

export default Main;

