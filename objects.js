// Primitive types represent the most basic data types in JavaScript.
// Primitives are immutable, which means they cannot be changed. They must be reassigned.
// Objects (everything else) are mutable. They can be updated in place (without reassignment).
// They represent a single piece of data (discrete value).
// Every thing in JS is an object expect primitive types.
// Objects represent a collection of data (composite type).

// Array - collection of data
// Arrays are objects that represent a collection of data.
// Arrays are indexed starting at 0.
// Arrays are mutable, which means they can be changed.

// Elements in an array are numerically indexed starting at 0.
const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

console.log(planets[1]); // Venus

const person = ["John", "Doe", 34];
console.log(person[0]); // John

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 34,
};

console.log(person2.firstName); // John

// Object Literals consist of key-value pairs.
// Object literals are surrounded by curly braces.
// Object literals are indexed by strings.
const planet = {
  name: "Earth",
  age: 4.5,
  isPopulated: true,
  moons: ["Moon", "Phobos", "Deimos"],
};

console.log(planet.moons[1]);

planet.img =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg";

console.log(planet);

const students = [
  ["John", "Joe", "James"],
  ["Jane", "Jessie", "Jill"],
];

console.log(students[1][2]);
