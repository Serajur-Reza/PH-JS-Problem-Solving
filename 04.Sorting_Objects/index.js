const { cars } = require("./data");

const res = cars.sort((a, b) => a?.year - b?.year);

console.log(res);
