/**
 * 2960
 */
const fs = require('fs');
const [n, k] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

const prime = [false, false, ...Array(n - 1).fill(true)]; // true면 소수

let count = 0;

function solution(n, k) {
  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      if (prime[j]) {
        prime[j] = false;
        count++;

        if (count === k) {
          console.log(j);
          return;
        }
      }
    }
  }
}

solution(n, k);
