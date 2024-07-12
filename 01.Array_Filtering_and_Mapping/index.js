const { people } = require("./data");

const females = people.filter((item) => item.gender === "Female");

console.log(females);

const maleNames = people
  .filter((item) => item.gender !== "Female")
  .map((item) => item.name);

console.log(maleNames);
