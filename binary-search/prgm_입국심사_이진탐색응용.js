/*
 * 사람 수 n, 심사관 당 심사 시간 배열 times
 * 모든 사람을 입국심사하는데 걸리는 최솟값을 구해라
 * - answer의 최대값은 times 배열 중 가장 큰 값 * 사람수 n
 * - 탐색하면서 각 심사위원이 해당 시간에 심사할 수 있는 사람 수를 계산하고 n에 가까운 시간을 찾는다.
 */

function solution(n, times) {
  let answer = 1e9;

  let left = 1;
  let right = times.reduce((acc, cur) => Math.max(acc, cur)) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const total = times.reduce((acc, cur) => Math.floor(mid / cur) + acc, 0);

    if (total >= n) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else left = mid + 1;
  }

  return answer;
}

console.log(solution(6, [7, 10]));
