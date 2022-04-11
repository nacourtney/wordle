import Row from "../row/row";
import "./game-board.css";

const GameBoard = (props) => {

    return (
        <div className="game-board">
            <Row letters={props.guesses[0]} results={props.result[0]}/>
            <Row letters={props.guesses[1]} results={props.result[1]}/>
            <Row letters={props.guesses[2]} results={props.result[2]}/>
            <Row letters={props.guesses[3]} results={props.result[3]}/>
            <Row letters={props.guesses[4]} results={props.result[4]}/>
            <Row letters={props.guesses[5]} results={props.result[5]}/>       
        </div>
    );
};

export default GameBoard;