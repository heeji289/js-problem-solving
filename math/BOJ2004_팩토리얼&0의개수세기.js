/**
 * 문제: nCm 값의 끝자리 연속된 0의 개수를 구해라
 *
 * 풀이과정
 * nCm = n! / m! (n-m)!
 * 2와 5의 승수를 구하고 최솟값을 찾는다. ✨
 *
 * 아주 단순하게 접근하려다가 좀 아닌 것 같아서 검색해봄..
 * 나중에 풀 때 까먹을 것 같은데 다시 풀어보기..
 */
const fs = require('fs');
const [n, m] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

function multiplierCount(num, base) {
  let count = 0;

  while (num > 0) {
    count += Math.floor(num / base);
    num = Math.floor(num / base);
  }

  return count;
}

const multiplier5 =
  multiplierCount(n, 5) - multiplierCount(m, 5) - multiplierCount(n - m, 5);
const multiplier2 =
  multiplierCount(n, 2) - multiplierCount(m, 2) - multiplierCount(n - m, 2);

console.log(Math.min(multiplier5, multiplier2));
