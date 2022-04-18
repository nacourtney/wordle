import "./square.css";

const Square = (props) => {

    let resultClass = "";

    if(props.result === 0){
        resultClass = "wrong";        
    } else if (props.result === 1){
        resultClass = "right"
    } else if (props.result === 2){
        resultClass = "incorrect-placement"
    }

    return (
        <div 
        className={`square ${resultClass}`}          
        >
            {props.letter}

        </div>
    );
};

export default Square;