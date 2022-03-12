import Square from "../square/square";
import "./row.css";

const Row = (props) => {

const squares = [];

if(props.letters){
for(let i = 0; i < props.letters.length; i++){
    squares.push(<Square letter={props.letters[i]}/>);
}
}
for(let i = squares.length; i < 5; i++){
    squares.push(<Square/>)
}

    return (
        <div className="row">
            {squares}

        </div>
    );
};



export default Row;
