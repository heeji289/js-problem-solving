- 문제: [신고 결과 받기](https://school.programmers.co.kr/learn/courses/30/lessons/92334)
- 풀이 참고: [kciter/coding-interview-js](https://github.com/kciter/coding-interview-js/blob/main/solution/24.js)
- 상태: 🟡 비효율 (정답이지만 책 풀이가 더 효율적)
- 복습필요: Y

## 1. 문제 설명

- 유저들이 신고한 내역이 주어짐. 유저들에게 정지 내역을 보내줄 때 k번 이상 정지당한 유저만 정지됨
- 신고한 유저가 정지 알림 메일을 받는 횟수를 리턴

## 2. 내 접근 방식

### 문제 분석

신고는 여러 번 할 수 있음. 한 유저에 대한 신고는 1회로 처리됨
k번 이상 신고된 유저는 정지되며 이 유저를 신고한 유저에게 정지 사실을 보냄
report가 1~200,000이라 O(NlogN) 이하로 가야 함

### 풀이 정리

- id_list와 report를 순회하면서 reports, reportedBy에 신고한 사람과 나를 신고한 사람을 각 각 저장해둠
- 마지막에 id_list 기준으로 순회하면서 reports에 있는 것들 중, reportedBy로 접근했을 때 개수가 k 이상인 것들만 필터링
- 중복 처리 제거를 위해 둘 다 Set으로 관리

## 3. 틀린 이유

큰 오브젝트 2개로 해결함 (1개로 할 수 있는데)

## 4. 올바른 접근 및 풀이

내 풀이에서 reportedBy 하나만 남겨둠
유저가 신고해서 정지될 사람들을 담을 count 오브젝트를 둠
reportedBy를 순회하면서 k번 이상 신고되어 정지될 유저인 경우,
이 사람을 신고한 유저로 count에 접근해 +1을 해줌
최종적으로 id_list를 순회하면서 count를 뽑아준다

## 5. 배운 점

- 데이터 관리 생각할 때 이게 꼭 여러 개 있어야 할 지 고민해보기
- Set 사용법 리마인드
  ```js
  const set = new Set();
  set.add(1); // 요소 추가
  set.size; // 사이즈 출력
  ```
