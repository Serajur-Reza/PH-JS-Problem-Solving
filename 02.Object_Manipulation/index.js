const { books } = require("./data");

function ObjectManipulator(books) {
  return books.map((item) => item.title);
}

const res = ObjectManipulator(books);

console.log(res);
