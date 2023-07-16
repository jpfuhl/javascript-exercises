const reverseString = function(str) {

    let reverse = '';

    for (let length = str.length - 1; length >= 0; length--) {
        reverse += str[length];
    }

    return reverse;
    
};

// Do not edit below this line
module.exports = reverseString;
