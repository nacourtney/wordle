import "./keyboard-button.css";

const KeyboardButton = (props) => {
    return (
        <div 
            className="keyboard-button" 
            onClick={() => {
                props.onClick(props.value);
            }}
        >
            {props.value}
        </div>
    );
};

export default KeyboardButton;