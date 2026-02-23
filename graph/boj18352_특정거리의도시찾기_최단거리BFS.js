const fs = require('fs');
let [info, ...lines] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

/**
 * 18352
 *
 * BFS로 탐색을 하되, visited 배열을 true, false로 나타내지 않고 depth를 기록하면 될 거 같다
 */

class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const top = this.items[this.headIndex];
    this.headIndex++;
    return top;
  }

  get length() {
    return this.tailIndex - this.headIndex;
  }
}

function dfs(graph, startNode) {
  const q = new Queue();
  const visited = Array.from({ length: graph.length }, () => -1);

  q.enqueue(startNode);
  visited[startNode] = 0;

  while (q.length > 0) {
    const curNode = q.dequeue();
    for (const node of graph[curNode]) {
      if (visited[node] === -1) {
        q.enqueue(node);
        visited[node] = visited[curNode] + 1;
      }
    }
  }

  return visited;
}

const [N, M, targetLength, startNode] = info.split(' ');

const graph = lines.reduce(
  (acc, cur) => {
    const [first, second] = cur.split(' ').map(Number);

    acc[first].push(second);

    return acc;
  },
  Array.from({ length: Number(N) + 1 }, () => [])
);

const result = dfs(graph, startNode);

// 출력부
const answer = [];

for (let i = 0; i < result.length; i++) {
  if (result[i] == targetLength) answer.push(i);
}

if (answer.length === 0) console.log(-1);
else console.log(answer.join('\n'));
