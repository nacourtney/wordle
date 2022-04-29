import Header from "../header/header";
import GameBoard from "../game-board/game-board";
import Keyboard from "../keyboard/keyboard";
import "./main.css";
import React from "react";
import {check} from "../../GuessChecker";


let currentGuess = [];
let rowCounter = 0;

const runningGuessesAndResults = {}

let gameWon = false;

const Main = () => {

    const [guesses, setGuesses] = React.useState([]);
    const [results, setResults] = React.useState([[],[],[],[],[]]);
    const [keyboardResults, setKeyboardResults] = React.useState([]);    

    const handleClick = (value) =>{        

        if(gameWon){            
            return;
        }

        if(value === "enter"){
            console.log(value);
            console.log(currentGuess);
            
            if(currentGuess.length === 5){

                const result = check(["s", "t", "a", "r", "e"], currentGuess);
                const newResults = [...results];
                newResults[rowCounter] = result;
                setResults(newResults);

                let correctCounter = 0;

                for(let i = 0; i < result.length; i++){
                    if(result[i] === 1){
                        correctCounter++;
                    }
                }

                if(correctCounter === 5){
                    gameWon = true;
                    alert("You won the game!")
                }
                

                for(let i = 0; i < currentGuess.length; i++){
                    if(runningGuessesAndResults[currentGuess[i]] !== undefined){
                       if(runningGuessesAndResults[currentGuess[i]] === 0 && result[i] !== 0){
                           runningGuessesAndResults[currentGuess[i]] = result[i];
                       } else if (runningGuessesAndResults[currentGuess[i]] === 2 && result[i] === 1){
                           runningGuessesAndResults[currentGuess[i]] = result[i];
                       } else (runningGuessesAndResults[i] = 1)
                    } else {
                        runningGuessesAndResults[currentGuess[i]] = result[i];
                    }
                }

                const tempKeyboardResult = [];

                for(const [key, value] of Object.entries(runningGuessesAndResults)){
                    tempKeyboardResult.push([key, value]);
                }

                setKeyboardResults(tempKeyboardResult);
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
                <GameBoard guesses={guesses} result={results} />
            </div>            
            <Keyboard onClick={handleClick} results={keyboardResults} />           
        </div>
    )
}

export default Main;

