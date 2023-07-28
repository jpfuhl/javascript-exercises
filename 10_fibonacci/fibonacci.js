const fibonacci = function(num) {

  const limit = parseInt(num);
  if (limit < 0)
    return 'OOPS';

  let n1 = 0;
  let n2 = 1;
  let nextTerm = n1;

  for (let i = 0; i < limit; i++) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  return nextTerm;
};

// Do not edit below this line
module.exports = fibonacci;
