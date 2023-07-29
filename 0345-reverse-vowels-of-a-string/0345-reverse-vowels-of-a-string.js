/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const VOWELS_ARR = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const result = [...s];
    let start = 0, end = s.length - 1;

    while(start < end) {
        if(!VOWELS_ARR.includes(s[start]))
            start++;
        if(!VOWELS_ARR.includes(s[end]))
            end--;
        if(VOWELS_ARR.includes(s[start]) && VOWELS_ARR.includes(s[end])) {
            const temp= result[start];
            result[start] = result[end];
            result[end] = temp;
            start++;
            end--;
        }     
    }
    return result.join("");
};