/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(obj === null) return null;
    if (typeof obj !== "object") return obj;
    if(Array.isArray(obj)) {
       return obj.filter(x => Boolean(x)).map(compactObject);
    }

    let returnedObj = {};
    for(const key in obj) {
        let objValue = compactObject(obj[key]);
        if(objValue) {
            returnedObj[key] = objValue;
        }
    }

    return returnedObj;
};