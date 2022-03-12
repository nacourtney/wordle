import Row from "../row/row";
import "./game-board.css";

const GameBoard = (props) => {

    

    return (
        <div className="game-board">
            <Row letters={props.guesses[0]}/>
            <Row letters={props.guesses[1]}/>
            <Row letters={props.guesses[2]}/>
            <Row letters={props.guesses[3]}/>
            <Row letters={props.guesses[4]}/>
            <Row letters={props.guesses[5]}/>       
        </div>
    );
};

export default GameBoard;