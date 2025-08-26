/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(target === 'z' || target === letters[letters.length - 1])
        return letters[0];

    for(const letter of letters) {
        if(letter > target)  return letter;
    }

    return letters[0];
};