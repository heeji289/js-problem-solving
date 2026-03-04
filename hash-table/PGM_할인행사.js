/**
 * ✅ 문제
 * - “어느 날부터 연속 10일 동안” 할인 품목으로 want/number를 모두 채울 수 있는 시작일의 개수를 구하는 문제
 * - 즉, 매 시작일 i에 대해 discount[i] ~ discount[i+9] (딱 10일)만 보고 판단해야 함
 *
 * ✅ 내가 처음 잘못 이해했던 점
 * - discount를 누적해서 세다가 “한 번 만족하면 그 이후는 다 만족”한다고 가정했음
 * - 하지만 실제로는 “고정 길이 10일”만 유효하므로 그 가정이 성립하지 않음
 *
 * ✅ 접근
 * 1) want + number를 wantMap(장바구니 요구사항)으로 만든다
 * 2) 시작일 i를 0 ~ discount.length-10 까지 순회한다
 * 3) 매 i마다, 10일 구간(discount[i..i+9])의 품목 개수를 discountMap으로 센다
 * 4) wantMap의 모든 품목이 discountMap에서 요구 수량 이상인지 확인한다
 * 5) 가능하면 answer += 1
 */
function solution(want, number, discount) {
  let answer = 0;

  const wantMap = {};
  for (let i = 0; i < want.length; i++) {
    wantMap[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length - 9; i++) {
    const discountMap = {};
    let isPossible = true;

    for (let j = 0; j < 10; j++) {
      const target = discount[i + j];
      discountMap[target] = (discountMap[target] ?? 0) + 1;
    }

    for (const [key, value] of Object.entries(wantMap)) {
      if ((discountMap[key] ?? 0) < value) {
        isPossible = false;
        break;
      }
    }

    if (isPossible) answer += 1;
  }

  return answer;
}
