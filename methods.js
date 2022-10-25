// Objects can store more than primitive data types like strings, booleans and numbers
const planet = {
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion",
  // Objects can store arrays in a key-value pair
  neighboringPlanets: ["Mars", "Venus"],

  // Objects can also store methods
  tellFunFact() {
    return "The earth is the only planet in our solar system not named after a Roman god or goddess.";
  },
  showWarning() {
    return "Space junk falls into Earth's atmosphere at a rate of about one a day.";
  },
};

function sayHello() {
  return "Hello!";
}

const greeting = sayHello();

console.log(`Here is a fun fact: ${planet.tellFunFact()}`);

planet.tellFunFact();
