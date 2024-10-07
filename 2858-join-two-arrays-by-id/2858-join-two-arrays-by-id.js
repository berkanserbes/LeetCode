/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    var obj =  {};

    for(item of arr1) {
        obj[item.id] = item;
    }

    for(item of arr2) {
        if(obj[item.id]) {
            for(const key in item)
                obj[item.id][key] = item[key]
        }
        else {
            obj[item.id] = item;
        }
    }

    return Object.values(obj);
};