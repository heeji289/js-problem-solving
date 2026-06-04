class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  const adjustList = {};

  graph.forEach(([u, v]) => {
    if (!adjustList[u]) adjustList[u] = [];
    adjustList[u].push(v);
  });

  const q = new Queue();
  const visited = new Set();

  const result = [];

  q.push(start);

  while (!q.isEmpty()) {
    const top = q.pop();

    if (!visited[top]) {
      visited[top] = true;
      result.push(top);
    }

    (adjustList[top] ?? []).forEach((v) => {
      if (!visited[v]) {
        q.push(v);
      }
    });
  }

  return result;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1,
  ),
);
console.log(
  solution(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1,
  ),
);
