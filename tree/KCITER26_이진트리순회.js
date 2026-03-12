function preorder(nodes, idx, result) {
  if (idx >= nodes.length) return;

  result.push(nodes[idx]);
  preorder(nodes, idx * 2 + 1, result);
  preorder(nodes, idx * 2 + 2, result);
}

function inorder(nodes, idx, result) {
  if (idx >= nodes.length) return;

  inorder(nodes, idx * 2 + 1, result);
  result.push(nodes[idx]);
  inorder(nodes, idx * 2 + 2, result);
}

function postorder(nodes, idx, result) {
  if (idx >= nodes.length) return;

  postorder(nodes, idx * 2 + 1, result);
  postorder(nodes, idx * 2 + 2, result);
  result.push(nodes[idx]);
}

/**
 * 주어진 nodes는 이진 트리를 표현한 것
 * 이를 전위, 중위, 후위 순회
 */
function solution(nodes) {
  const pre = [];
  const inn = [];
  const post = [];

  preorder(nodes, 0, pre);
  inorder(nodes, 0, inn);
  postorder(nodes, 0, post);

  console.log(pre, inn, post);
}

solution([1, 2, 3, 4, 5, 6, 7]);
