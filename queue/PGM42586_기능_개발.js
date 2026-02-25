/**
 * 문제 접근
 * - "먼저", "순서대로" -> 큐를 활용하면 되겠다.
 * - 현재 진도와 스피드를 기반으로 작업 완료 예상일을 계산해 저장해두고,
 * - 맨 앞 요소를 기준으로 이 값 이하일때까지 순회해 카운트를 세주고 값 이상인 경우가 나오면 배포된 것이므로 answer에 푸시해둠
 *
 * 놓친 부분
 * - 배열 다 돌고 마지막에 남은 count를 푸시해서 처리해줘야 한다.
 */
function solution(progresses, speeds) {
  const completeDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );

  const answer = [];

  let firstDay = completeDays[0];
  let count = 0;

  for (let i = 0; i < completeDays.length; i++) {
    if (firstDay >= completeDays[i]) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      firstDay = completeDays[i];
    }
  }

  answer.push(count);

  return answer;
}
