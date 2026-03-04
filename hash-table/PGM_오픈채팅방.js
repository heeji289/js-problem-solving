/**
 * 핵심 아이디어
 * - uid -> (최종)닉네임을 저장하는 매핑 테이블(userMap)을 만든다.
 * - record를 순회하면서:
 *   - Enter: uid의 닉네임을 갱신하고, 출력 대상이므로 (Enter, uid)를 logs에 저장
 *   - Leave: 출력 대상이므로 (Leave, uid)를 logs에 저장
 *   - Change: uid의 닉네임만 갱신 (출력 없음)
 * - 마지막에 logs를 순회하며, 각 uid를 userMap의 '최종 닉네임'으로 치환해 메시지로 만든다.
 *
 * 참고
 * - 1) record 1회차: userMap(최종 닉네임)만 먼저 확정
 * - 2) record 2회차: Enter/Leave만 골라 userMap과 매핑해 출력
 * - 나는 "행위를 그대로" 한 번에 처리했고, 책은 "단계 분리"로 더 명확한 느낌
 */
function solution(record) {
  const logs = [];
  const userMap = {};

  for (const str of record) {
    const [command, uid, name] = str.split(" ");

    switch (command) {
      case "Enter": {
        userMap[uid] = name;
        logs.push(`${command} ${uid}`);
        break;
      }
      case "Leave": {
        logs.push(`${command} ${uid}`);
        break;
      }
      case "Change": {
        userMap[uid] = name;
        break;
      }
    }
  }

  return logs.map((log) => {
    const [command, uid] = log.split(" ");
    return `${userMap[uid]}님이 ${command === "Enter" ? "들어왔습니다." : "나갔습니다."}`;
  });
}
