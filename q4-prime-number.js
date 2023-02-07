const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// take a number input from user
readline.question(`Enter a number: `, (num) => {
  if (!parseInt(num)) {
    console.log("incorrect! input");
    return;
  }

  num = parseInt(num);
  if (num === 1) {
    console.log("1 is not prime nor a composite number");
    return;
  }
  if (num === 2) {
    console.log("2 is a prime number");
    return;
  }

  let isPrime = true;
  if (num % 2 === 0) {
    isPrime = false;
  } else {
    for (let i = 3; i <= num / 2; i += 2) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) console.log(`${num} is a prime number.`);
  else console.log(`${num} is not a prime number.`);
  readline.close();
});
