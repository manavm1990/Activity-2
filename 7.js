const mathGrade = "A";
const isRoomClean = true;

// TODO: Write an if statement that prints "You get a gold star!" if mathGrade is an A and isRoomClean is true.
// Logical Operators - AND (&&) and OR (||)
if (mathGrade === "A" && isRoomClean === true) {
  console.log("You get a gold star!");
}

// TODO: Write an if statement that prints "We can get ice cream!" if mathGrade is an A or isRoomClean is true.
if (mathGrade === "A" || isRoomClean === true) {
  console.log("We can get ice cream!");
}

// Short Circuiting
mathGrade === "A" && console.log("I will not print");
