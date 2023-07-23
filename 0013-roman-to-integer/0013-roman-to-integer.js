/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0; quotient = 0;
    for(let i=s.length-1; i>=0; i--) {
        switch(s.charAt(i)) {
            case 'I': quotient = 1; break;
            case 'V': quotient = 5; break;
            case 'X': quotient = 10; break;
            case 'L': quotient = 50; break;
            case 'C': quotient = 100; break;
            case 'D': quotient = 500; break;
            case 'M': quotient = 1000; break;
        }
        answer = (answer > 4 * quotient) ? answer - quotient : answer + quotient;
    }
    return answer;
};