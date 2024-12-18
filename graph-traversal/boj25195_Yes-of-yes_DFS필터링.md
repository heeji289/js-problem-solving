## 1. 문제설명

---

- 단방향 그래프가 있다. 노드에 팬곰돌이가 여행자 곰돌이를 방해한다.
- 더 이상 갈 수 없을 때까지 노드를 탐색하는 것을 여행이라고 한다.
- 팬 곰돌이를 만나지 않고 여행자 곰돌이가 여행에 성공할 수 있는지 유무를 출력한다.

## 2. 접근 방식

---

- DFS로 모든 가능한 경우의 수를 탐색해 경로 배열을 만들고, 경로 배열을 순회하면서 팬 곰돌이를 만났는지 체크하면 되겠다 생각
- 이렇게 풀었을 때 주어진 예제는 통과했으나 "시간 초과"로 실패했다.

## 3. 틀린 이유 설명 & 해결 방식

---

- 일단 모든 경로를 다 구하고, 경로마다 팬을 만나는지를 파악하는데에서 시간이 오래 걸렸다.
  - 모든 경로를 다 구하는 것이 아니라 조건에 맞는 경로가 나오면 그만 탐색해야겠다 판단. 경로 탐색 중 팬을 만나면 그 경로는 그만 탐색하도록 하고 리프노드에 도달한 경우, 팬을 만나지 않고 도착했으므로 여행이 완료되어 종료시킴
    - 여전히 시간초과
  - 다시 보니 이전에 모든 경로를 구하기 위해 스택에 `[start, [...path, neighbor]]`를 푸시하고 있는데 이 부분에서 시간이 오래 걸리겠다는 가설
    - 더 이상 path를 구할 필요가 없으므로 스택은 1차원 배열로 node만 넣도록 수정함
      - 문제 해결

## 4. 최종 코드

---

[코드](./boj25195_Yes-of-yes_DFS필터링.js)
