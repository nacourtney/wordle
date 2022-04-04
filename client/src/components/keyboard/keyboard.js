import keyboard from "./keyboard.css";
import Row from "../row/row";
import Square from "../square/square";
import KeyboardButton from "../keyboard-button/keyboard-button";

const row1 = 10;
const row2 = 9;
const row3 = 7;

const keyBoardTop = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const keyBoardMiddle = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const keyBoardBottom = ["backspace","z", "x", "c", "v", "b", "n", "m", "enter"];

const Keyboard = (props) => {

    const keyboardButtonsTop = [];
    const keyBoardButtonsMiddle = [];
    const keyBoardButtonsBottom = [];
    const results = [["q", 0],["b", 1],["k", 2]];
    

    for(let i = 0; i < keyBoardTop.length; i++){
        let result = undefined;
        
        for(let j = 0; j < results.length; j++){
            if(keyBoardTop[i] === results[j][0]){
                result = results[j][1]
            }
        }
      keyboardButtonsTop.push(<KeyboardButton onClick={props.onClick} value={keyBoardTop[i]} result={result}/>);
    }

    
    for(let i = 0; i < keyBoardMiddle.length; i++){

        let result = undefined;
        
        for(let j = 0; j < results.length; j++){
            if(keyBoardMiddle[i] === results[j][0]){
                result = results[j][1]
            }
        }

        keyBoardButtonsMiddle.push(<KeyboardButton onClick={props.onClick} value={keyBoardMiddle[i]} result={result} />);
    }

    for(let i = 0; i < keyBoardBottom.length; i++){

        let result = undefined;
        
        for(let j = 0; j < results.length; j++){
            if(keyBoardBottom[i] === results[j][0]){
                result = results[j][1]
            }
        }

        keyBoardButtonsBottom.push(<KeyboardButton onClick={props.onClick} value={keyBoardBottom[i]} result={result} />);
    }

    return (
        <div className="keyboard">
            <div className="keyboard-row">
                {keyboardButtonsTop}                
            </div>
            <div className="keyboard-row">
                {keyBoardButtonsMiddle}                
            </div>
            <div className="keyboard-row">
                {keyBoardButtonsBottom}
            </div>
        </div>
    );
};



export default Keyboard;