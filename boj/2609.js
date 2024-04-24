/**
 * 2609
 *
 * 최대공약수 최소공배수
 * 계산법 기억이 안나요 ㅎ
 * 유클리드 호제법 https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95
 * - 서로 상대방 수를 나누어..?
 * gcd
 * 1. i를 j로 나눈 나머지가 0이 아닐 때까지
 * 2. 나머지 값이 0이 아니면 이제 j와 그 값으로..
 *
 * lcm
 * - a * b / gcd
 */

const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

const [left, right] = input.split(' ').map((i) => Number(i));

let i = left;
let j = right;

while (i % j !== 0) {
  const n = i % j;

  if (n !== 0) {
    i = j;
    j = n;
  }
}

console.log(j);
console.log((left * right) / j);
