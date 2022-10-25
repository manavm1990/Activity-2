// Object customerDrink with three properties
const customerDrink = {
  name: "coffee",
  sugars: 3,
  isReady: true,
};

// This logs the entire object
console.log(customerDrink);

// We don't have to explicitly use the COMPARISON OPERATOR '=== true'
// 'if' statement condition will evaluate to true if the value is truthy
if (customerDrink.isReady) {
  console.log(
    "Ready for pick-up: " +
      customerDrink.name +
      " with " +
      customerDrink.sugars +
      " sugars."
  );
}
