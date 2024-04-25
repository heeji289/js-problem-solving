/**
 * 1929 소수구하기
 */
const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

const [m, n] = input.split(' ').map((v) => Number(v));

// function isPrime(num) {
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// for (let i = m; i <= n; i++) {
//   if (isPrime(i) && i > 1) {
//     console.log(i);
//   }
// }

const prime = [false, false, ...Array(n - 1).fill(true)];

for (let i = 2; i * i <= n; i++) {
  if (prime[i]) {
    for (j = i * 2; j <= n; j += i) {
      prime[j] = false;
    }
  }
}

for (let i = m; i <= n; i++) {
  if (prime[i]) {
    console.log(i);
  }
}
