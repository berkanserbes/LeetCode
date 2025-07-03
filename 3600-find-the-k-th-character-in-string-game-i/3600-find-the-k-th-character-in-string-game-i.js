/**
 * @param {number} k
 * @return {character}
 */

var kthCharacter = function(k) {
    let word = "a"

    function nextChar(c) {
        if (c === 'z') return 'a';
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    while(word.length < k) {
        let nextPart = "";
        for(let i=0; i<word.length; i++) {
            nextPart += nextChar(word[i])
        }
        word += nextPart;
    }

    return word[k - 1];
};