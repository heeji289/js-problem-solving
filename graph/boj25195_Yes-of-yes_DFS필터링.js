const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

// 입력 처리
const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < M + 1; i++) {
  const [left, right] = input[i].split(' ').map(Number);
  graph[left].push(right);
}

const fanLocations = input[input.length - 1].split(' ').map(Number);
const fanLocationSet = new Set(fanLocations);

// 로직
function dfsWithStack(graph, start) {
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (fanLocationSet.has(node)) continue;

    if (graph[node].length === 0) {
      return true;
    }

    for (const neighbor of graph[node]) {
      stack.push(neighbor);
    }
  }

  return false;
}

const answer = dfsWithStack(graph, 1);

// 출력
console.log(answer ? 'yes' : 'Yes');
