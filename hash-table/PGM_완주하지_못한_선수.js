/**
 * 1. 참가자 이름으로 Map에 삽입한다. 만약 존재하지 않으면 1을 넣어주고 동명이인이라 이미 존재했다면 +1을 해준다.
 * 2. 완주자 이름을 돌면서 Map에서 찾아 -1을 해준다. 만약 값이 0이 되면 삭제 한다.
 * 3. 최종적으로 Map.keys()[0]으로 뽑을 수 있다.
 *
 * 시간 복잡도가 O(N+N) = O(N)
 */
function solution(participant, completion) {
  const participantMap = new Map();

  for (const p of participant) {
    if (participantMap.has(p)) {
      participantMap.set(p, participantMap.get(p) + 1);
    } else {
      participantMap.set(p, 1);
    }
  }

  for (const c of completion) {
    const completed = participantMap.get(c) - 1;

    if (completed === 0) {
      participantMap.delete(c);
    } else {
      participantMap.set(c, completed);
    }
  }

  return [...participantMap.keys()][0];
}
