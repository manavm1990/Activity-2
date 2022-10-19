const item = "chips";
const price = 2.55;
const quantity = 3;

const total = price * quantity;

const message = `You bought ${quantity} ${item}s for $${total}`;
console.log(message);

const age = 18;

if (age < 21) {
  console.log("no drinks for you");
} else {
  console.log("PARTAY!");
}

// TODO: If the total is over $20, log that they get a 10% discount
// Else, log that they get a 5% discount
if (total > 20) {
  console.log("You get a 10% discount");
} else {
  console.log("You get a 5% discount");
}
