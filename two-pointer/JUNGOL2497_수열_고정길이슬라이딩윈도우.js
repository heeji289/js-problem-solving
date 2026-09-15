const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

/**
 * 1:45 시작
 *
 * k일 연속 기간 동안 합이 가장 큰 값
 *
 * 0부터 시작해서 N - k 만큼 순회하면서
 *  그 내부에서 i부터 i + k까지 순회하면서 합을 누적한다
 *  값을 비교하고 정답을 갱신한다.
 *
 * 결국에 O(n) 아닌가?
 */

// input[0]에서 N (날짜수), K (연속 일 수)
const [N, K] = input[0].split(' ').map(Number);

// input[1]로 온도 배열
const temperatures = input[1].split(' ').map(Number);

/**
 *       L    R
 * 3 -2 -4 -9 0 3 7 13 8 -3
 *
 * R - L이 K가 될 떄까지 right++
 * L을 left++
 */

let answer = -Infinity;
let left = 0;
let sum = 0;

// left, right 0에서 시작
for (let right = 0; right < N; right++) {
  // 누적합에 right 더해주고
  sum += temperatures[right];

  // 길이가 K보다 크면 left를 +1
  while (right - left + 1 > K) {
    sum -= temperatures[left];

    left++;
  }

  if (right - left + 1 === K && sum > answer) {
    answer = sum;
  }
}

console.log(answer);
