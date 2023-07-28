const getTheTitles = function(booksObjects) {
  const bookTitles = [];

  for (const book of booksObjects) {
    bookTitles.push(book.title);
  }

  return bookTitles;
};

// return array.map((book) => book.title);


// Do not edit below this line
module.exports = getTheTitles;
