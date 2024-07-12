const { people } = require("./data");

const findAndModify = (name, age) => {
  const persons = people.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  //   console.log(persons);

  persons.forEach((element) => {
    element.age = age;
  });

  return persons;
};

console.log(findAndModify("frank", 50));
