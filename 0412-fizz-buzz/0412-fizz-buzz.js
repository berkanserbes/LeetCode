/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    
    for(let i=1; i <= n; i++) {
        let output = "";
        if(i%3 == 0 && i%5 == 0) {
            output = "FizzBuzz"
        } else if(i%3 == 0) {
            output = "Fizz"
        } else if(i % 5 == 0) {
            output = "Buzz"
        }
        else {
            output = i.toString();
        }
        result.push(output)
    }
    return result;
};