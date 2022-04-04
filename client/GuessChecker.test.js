import {check} from "./GuessChecker";

// Correct word: stare
// Guess word: great

/*
if(props.result === 0){
        resultClass = "wrong";        
    } else if (props.result === 1){
        resultClass = "right"
    } else if (props.result === 2){
        resultClass = "incorrect-placement"
    }
*/

test("guessChecker", () => {
    expect(check(["s", "t", "a", "r", "e"], ["g", "r", "e", "a", "t"])).toEqual([0, 2, 2, 2, 2]);
})