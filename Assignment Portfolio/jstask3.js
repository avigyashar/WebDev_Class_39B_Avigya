// Q1 Shopping discount
let purchasedAmount = 85;
let price = purchasedAmount;
if (purchasedAmount >= 100) {
  price = purchasedAmount * 0.8; 
} else if (purchasedAmount >= 50) {
  price = purchasedAmount * 0.9; 
} else {
  console.log("No discount");
}
console.log("The amount is " + price);

