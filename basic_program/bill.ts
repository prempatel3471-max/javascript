export{}
let units: number = 10;
let bill: number;

if (units <= 50) {
  bill = units * 10;
} 

else if (units <= 100) {
  bill = units * 15;
} 

else {
  bill = units * 20;
}

console.log("Bill = " + bill);