import "./keyboard-button.css";

const KeyboardButton = (props) => {
    return (
        <div 
            className="keyboard-button" 
            onClick={() => {
                console.log(props.value);
            }}
        >
            {props.value}
        </div>
    );
};

export default KeyboardButton;