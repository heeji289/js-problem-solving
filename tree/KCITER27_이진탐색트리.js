function makeBST(target, idx, bst) {
  if (bst.length === 0) {
    bst.push(target);
    return;
  }

  if (bst[idx] > target) {
    const newIdx = idx * 2 + 1;

    if (bst[newIdx] == null) {
      bst[newIdx] = target;
      return;
    } else {
      makeBST(target, newIdx, bst);
    }
  } else {
    const newIdx = idx * 2 + 2;

    if (bst[newIdx] == null) {
      bst[newIdx] = target;
      return;
    } else {
      makeBST(target, newIdx, bst);
    }
  }
}

function search(bst, target, idx) {
  console.log(`[DEBUG] bst: ${bst}, target: ${target}, idx: ${idx}`);

  if (bst[idx] === target) return true;

  if (bst[idx] > target && idx * 2 + 1 < bst.length) {
    return search(bst, target, idx * 2 + 1);
  } else if (bst[idx] < target && idx * 2 + 2 < bst.length) {
    return search(bst, target, idx * 2 + 2);
  }

  return false;
}

/**
 * 이진 탐색 트리를 생성하고
 * searchList 기준 탐색이 가능한지 확인해 true, false 리턴
 */
function solution(lst, searchList) {
  let bst = [];
  const answer = [];

  for (const target of lst) {
    makeBST(target, 0, bst);
  }

  console.log("bst:", bst);

  for (const searchQuery of searchList) {
    answer.push(search(bst, searchQuery, 0));
  }

  return answer;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
