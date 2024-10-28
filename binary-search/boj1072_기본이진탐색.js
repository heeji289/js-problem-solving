const fs = require('fs');
let [x, y] = fs.readFileSync('dev/stdin').toString().trim().split(' ');

x = Number(x);
y = Number(y);

let answer = -1;

/**
 * 이진탐색으로 currentWinRate보다 크면서 최솟값인 걸 찾을 거임
 * 중앙값으로 계산한 결과 cur보다 크다면 ok. end를 mid로 옮겨줘
 * 만약 작다면 start를 mid+1로 옮겨야겠지?
 */

function calculateWinRate(x, y, a) {
  return Math.floor(((y + a) * 100) / (x + a));
}

const currentWinRate = calculateWinRate(parseInt(x), parseInt(y), 0);

if (currentWinRate > 98) {
  console.log(answer);
  return;
}

let start = 1;
let end = 1000000000;

while (start < end) {
  const mid = Math.floor((start + end) / 2);
  const winRate = calculateWinRate(x, y, mid);

  if (winRate > currentWinRate) end = mid;
  else start = mid + 1;
}

answer = start;
console.log(answer);
