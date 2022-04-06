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
    expect(check(["s", "t", "a", "r", "e"], ["a", "d", "i", "e", "u"])).toEqual([2, 0, 0, 2, 0]);
    expect(check(["s", "t", "a", "r", "e"], ["s", "t", "a", "r", "e"])).toEqual([1, 1, 1, 1, 1]);
    expect(check(["s", "t", "a", "r", "e"], ["s", "s", "i", "e", "m"])).toEqual([1, 0, 0, 2, 0]);
})

