export const check = (correctAnswer, guess) => {

    const results = [0, 0, 0, 0, 0];
    const letterDictionary = getLetterAndCounts(correctAnswer);

    for(let i = 0; i < correctAnswer.length; i++){        

        if(correctAnswer[i] === guess[i] && letterDictionary[correctAnswer[i]] !== 0){
            results[i] = 1;
            letterDictionary[correctAnswer[i]] = letterDictionary[correctAnswer[i]] - 1;
        } else {
            if(correctAnswer.includes(guess[i]) && letterDictionary[guess[i]] > 0){
                results[i] = 2;
            }            
        }
  
    }

    return results;
}

export const getLetterAndCounts = (word) => {
    let dictionary = {};

    word.forEach(letter => {
        if(dictionary[letter]){
            dictionary[letter] = dictionary[letter] + 1;
        } else {
            dictionary[letter] = 1;
        }
    });


    return dictionary;
}