// extractValue
// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of
// each object at the key.
function extractValue(array, key){
    return array.reduce(function(accumulator,nextValue){
        accumulator.push(nextValue[key]);
        return accumulator;
    },[]
    );
}


// vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number
// of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(string) {
    const vowels = "aeiou";
    return string.toLowerCase().split('').reduce(function(accumulator, nextValue) {
        if (vowels.indexOf(nextValue) !== -1) {
            if (accumulator[nextValue]) {
                accumulator[nextValue] += 1;
            } else {
                accumulator[nextValue] = 1;
            }
        }
        return accumulator;
    }, {});
}
// function vowelCount(string) {
//     const vowels = "aeiou";
//     return string.toLowerCase().split('').reduce(function(accumulator, char) {
//         if (vowels.indexOf(char) !== -1) {
//             accumulator[char] = (accumulator[char] || 0) + 1;
//         }
//         return accumulator;
//     }, {});
// }
// function vowelCount(string){
//     const vowels = "aeiou";
//     const vowelFrequency = {};
//     return string.split('').reduce(function(accumulator,nextValue){
//         let lowerCaseWord = nextValue.toLowerCase()

//         for (let vowel of string){
//             if(vowelFrequency[vowel] !== undefined){
//                 vowelFrequency[vowel] += 1;
//             }else{
//                 vowelFrequency[vowel]=1;
//             }
//         }
//     }
//     )
// }



// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object
// now including the key and value passed to the function.
function addKeyAndValue(array, key, value){
    return array.reduce(function(accumulator,nextValue,index){
        accumulator[index][key] = value;
        return accumulator;
    },array);
}
// function addKeyAndValue(array, key, value) {
//     return array.reduce(function(accumulator, nextValue) {
//         nextValue[key] = value;
//         accumulator.push(nextValue);
//         return accumulator;
//     }, []);
// }

// partition
// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it.
// The partition function should run the callback function on each value in the array and if the result of the callback function at that
// specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value
// is false, the value should be placed in the second subarray.
function partition(array, callback) {
    return array.reduce(function(accumulator, nextValue) {
        if (callback(nextValue)) {
            accumulator[0].push(nextValue);
        } else {
            accumulator[1].push(nextValue);
        }
        return accumulator;
    }, [[], []]); 
}
