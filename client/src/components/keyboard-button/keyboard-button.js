import "./keyboard-button.css";

const KeyboardButton = (props) => {

    let resultClass = ""


    if(props.result === 0){
        resultClass = "wrong";        
    } else if (props.result === 1){
        resultClass = "right"
    } else if (props.result === 2){
        resultClass = "incorrect-placement"
    }

    return (
        <div 
            className={`keyboard-button ${resultClass}`}
            onClick={() => {
                props.onClick(props.value);
            }}
        >
            {props.value}
        </div>
    );
};

export default KeyboardButton;