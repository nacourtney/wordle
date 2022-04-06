export const check = (correctAnswer, guess) => {

    const results = [0, 0, 0, 0, 0];

    for(let i = 0; i < correctAnswer.length; i++){

        if(correctAnswer[i] === guess[i]){
            results[i] = 1;
        } else {
            if(correctAnswer.includes(guess[i])){
                results[i] = 2;
            }            
        }
  
    }

    return results;
}