const sumAll = function(number1, number2) {

    if (number1 < 0 || number2 < 0)
        return 'ERROR';
    
    if (!Number.isInteger(number1) || !Number.isInteger(number2))
        return 'ERROR';
    
    const start = number1 < number2 ? number1 : number2;
    const end = number2 > number1 ? number2 : number1;

    let sum = 0;

    for (let i = start; i < end; i++)
        sum += i;
    sum += end;

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
