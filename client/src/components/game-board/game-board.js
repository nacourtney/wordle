import Row from "../row/row";
import "./game-board.css";

const GameBoard = () => {
    return (
        <div className="game-board">
            <Row letters={["a", "b", "c", "d", "e"]}/>
            <Row letters={["a", "b", "c"]}/>
            <Row />
            <Row />
            <Row />
            <Row />       
        </div>
    );
};

export default GameBoard;