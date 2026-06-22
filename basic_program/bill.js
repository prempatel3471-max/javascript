let units = 10;
let bill;
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
export {};
