/**
 * [문제]
 * arr에서 두 원소를 뽑아 더해 target을 만들 수 있는지 여부를 리턴
 * 
 * [풀이]
 * - 처음 생각 ⇒ 배열을 2중 for문으로 순회한다. 가능한 두 수의 합을 모두 구한다. 그 합을 object의 key로 저장한다. 마지막에 target이 존재하는지 확인한다.
 * - 이 방식의 문제는 시간복잡도가 O(N^2)이라는 것. 이 방식은 시간 초과의 위험이 있다.
 * - 그 다음 생각 ⇒ arr로 Set을 만들어두고 arr를 순회하면서 target - 기준값이 Set에 존재하는지를 확인하고자 함. 시간복잡도는 O(N)으로 줄어든다. 다만, 기준값으로 Set에 또 접근하면 중복 접근이 되므로 이건 피해야 했음
 * - 굳이 다 돌 필요가 있을까? 미리 Set으로 만드는 대신
    - 빈 Set을 만들어두고
    - 배열을 0번 인덱스부터 순회하며
    - 현재 값 x를 기준으로 target - x가 Set에 있는지 확인한다
    - 없으면 현재 값 x를 Set에 넣고 다음 요소를 순회
 * - 이 방식은 중복 접근 문제가 없으며 arr를 전부 순회하지 않고 target을 만드는 경우가 된다면 빠르게 순회를 멈출 수 있다.
 */
function solution(arr, target) {
  const set = new Set();
  let answer = "false";

  for (const num of arr) {
    const remain = target - num;
    if (set.has(remain)) {
      answer = "true";
      break;
    } else {
      set.add(num);
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
