/**
 * Merges properties from one object into another.
 *
 * @param {Object} target                  The target object to receive properties.
 * @param {Object} source                  The source object from which properties will be copied.
 * @return {Object}                        Returns `target` with merged properties.
 */
function mergeObjects(target, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
}

// Example usage
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let result = mergeObjects(obj1, obj2);
console.log(result); // { a: 1, b: 3, c: 4 }
