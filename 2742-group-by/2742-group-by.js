/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};
    for(let x of this) {
        const key = fn(x);
        if(!result.hasOwnProperty(key)) {
            result[key] = [];
        }   
        result[key].push(x);    
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */