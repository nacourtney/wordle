import Header from "../header/header";
import GameBoard from "../game-board/game-board";
import Keyboard from "../keyboard/keyboard";
import "./main.css";

const Main = () => {

    const guesses = [
        
    ];

    const handleClick = (value) =>{
        console.log(value);
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

