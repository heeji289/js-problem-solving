const fs = require('fs').readFileSync('example.txt').toString();
const input = fs.trim().split('\n');

const N = Number(input[0]);

const scores = input.slice(1).map(Number);
const scoresLength = scores.length;

/**
 * 거꾸로 순회하면서 직전값-1을 타겟으로 감소시키기
 * 변한 직전 값도 저장해줘야할 듯
 */

let answer = 0;

for (let i = scoresLength - 2; i > -1; i--) {
  const target = scores[i + 1] - 1;

  if (scores[i] > target) {
    answer += scores[i] - target;
    scores[i] = target;
  }
}

console.log(answer);
