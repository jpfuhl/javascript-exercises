const repeatString = function(str, times) {

    if (times < 0)
        return 'ERROR';
    
    let newString = '';

    for (let index = 0; index < times; index++) {
        newString += str;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
