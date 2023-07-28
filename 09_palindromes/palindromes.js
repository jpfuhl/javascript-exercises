const palindromes = function (string) {
  
  // remove whitespace and punctuation
  let trimmedString = '';

  for (let i = 0; i < string.length; i++)
  {
    if (string[i] !== ' '
     && string[i] !== '.'
     && string[i] !== ','
     && string[i] !== '!'
     && string[i] !== '?')
      trimmedString += string[i].toLowerCase();
  }

  // check length even/odd and create substrings
  const length = trimmedString.length;
  let substr1 = '';
  let substr2 = '';

  if (length % 2 === 0) {
    substr1 = trimmedString.substring(0, length / 2);
    substr2 = trimmedString.substring(length / 2, length).split('').reverse().join('');
  }
  else {
    const halfLength = Math.ceil(length / 2);
    substr1 = trimmedString.substring(0, halfLength);
    substr2 = trimmedString.substring(halfLength - 1, length).split('').reverse().join('');
  }

  // check palindrome
  return (substr1 === substr2) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
