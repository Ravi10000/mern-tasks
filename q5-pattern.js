// solution one
console.log("solution one ------");
console.log("*******");
console.log("*    *");
console.log("*   *");
console.log("*  *");
console.log("* *");
console.log("**");
console.log("*");

// solution two
const n = 7;
let pattern = "";

for (let i = n; i > 0; i--) {
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === n) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}
console.log("solution two ------");
console.log(pattern);
