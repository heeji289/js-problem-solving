const fs = require('fs');
let [info, ...lines] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m, r] = info.split(' ').map((v) => Number(v));
lines = lines.map((line) => line.split(' ').map((v) => Number(v)));

class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items.push(item);
    this.tailIndex++;
  }

  dequeue() {
    return this.items[this.headIndex++];
  }

  peek() {
    return this.items[this.headIndex];
  }

  get length() {
    return this.tailIndex - this.headIndex;
  }
}

/**
 * dfs 로직
 */
function dfs(graph, start) {
  // 방문 순서 체크
  let visitCount = 0;

  // queue 생성
  const queue = new Queue();

  // visited 생성
  // queue에 start를 넣고, visited true (시작점에서)
  queue.enqueue(start);

  const visited = Array.from({ length: graph.length }, (v, k) =>
    k === start ? ++visitCount : 0
  );

  // 큐가 빌 때까지 돌면서
  while (queue.length > 0) {
    // 큐 맨 앞 요소를 꺼내오고
    const top = queue.dequeue();

    // 얘랑 연결된 간선들을 순회하면서
    for (const line of graph[top]) {
      // 방문 안한 곳이 있으면 방문하고 queue에 넣어준다
      if (visited[line] === 0) {
        visited[line] = ++visitCount;
        queue.enqueue(line);
      }
    }
  }

  return visited;
}

/**
 * 1. 간선 배열들을 순회하면서 각 정점 인덱스에 연결된 간선 정보를 추가해준다
 * 2. 연결된 간선을 오름차순으로 정렬한다
 */
const graph = lines
  .reduce(
    (acc, cur) => {
      const first = cur[0];
      const second = cur[1];

      acc[first].push(second);
      acc[second].push(first);

      return acc;
    },
    Array.from({ length: n + 1 }, () => [])
  )
  .map((line) => line.sort((a, b) => a - b));

const result = dfs(graph, r);
console.log(result.slice(1).join('\n'));
