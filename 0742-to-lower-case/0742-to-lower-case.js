/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result = "";
    const sizeOfInput= s.length;
    for(let i=0; i <= sizeOfInput - 1; i++) {
        if(s[i] == s[i].toUpperCase()) {
            result += s[i].toLowerCase();
        } else {
            result += s[i];
        }
    }

    return result;
};