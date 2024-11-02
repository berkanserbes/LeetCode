/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    let promiseResults = [];
    let completedPromises = 0;
    
    return new Promise((resolve, reject) => {
        functions.forEach((func, index) => {
            func().then(result => {
                promiseResults[index] = result;
                completedPromises++;

                if(completedPromises == functions.length) {
                    resolve(promiseResults);
                }
            })
            .catch(err => {
                reject(err);
            })
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */