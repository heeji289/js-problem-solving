/**
 * 아이디어
 * - 주어진 nums 배열을 집합으로 표현 (동일한 종류의 포켓몬 뽑으면 하나로 처리하므로 중복 제거)
 * - 집합의 개수를 세고 (k)
 * - k랑 2/n 중 더 작은 값을 선택
 *
 * 왜냐면
 * - 집합의 크기가 작아도 그 수 밖에 못 뽑고
 * - 뽑을 수 있는 횟수가 작으면 그것 밖에 못 뽑고
 */
function solution(nums) {
  const set = new Set(nums);

  return Math.min(set.size, nums.length / 2);
}
