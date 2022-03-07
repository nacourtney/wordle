import Header from "../header/header";
import GameBoard from "../game-board/game-board";
import Keyboard from "../keyboard/keyboard";
import "./main.css";

const Main = () => {
    return(        
        <div>
            <Header />
            <div className="gameboard-container" >
                <GameBoard />
            </div>            
            <Keyboard />           
        </div>
    )
}

export default Main;

