function find(target, arr) {
  if (target === arr[target]) return target;

  find(arr[target], arr);
}

// 책에서 find 개선 내용
function find2(parents, x) {
  if (parents[x] === x) {
    return x;
  }

  // 경로 압축을 위해 해당 노드의 부모 노드를 찾아 parents[x]에 저장해줌
  parents[x] = find(parents, parents[x]);

  return parents[x];
}

function union(x, y, arr) {
  const root1 = find(x, arr);
  const root2 = find(y, arr);

  if (root1 > root2) {
    arr[root2] = root1;
  } else {
    arr[root1] = root2;
  }
}

function solution(k, operations) {
  const arr = Array.from({ length: k }, (v, index) => index);

  for (const operation of operations) {
    switch (operation[0]) {
      case "u":
        const [x, y] = operation.slice(1);
        union(x, y, arr);
        break;
      case "f":
        const [z] = operation.slice(1);
        find(z, arr);
        break;
    }
  }

  return arr.filter((v, idx) => v === idx).length;
}

console.log(
  solution(3, [
    ["u", 0, 1],
    ["u", 1, 2],
    ["f", 2],
  ]),
);

console.log(
  solution(4, [
    ["u", 0, 1],
    ["u", 2, 3],
    ["f", 0],
  ]),
);
