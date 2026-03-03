function hashing(str) {
  const p = 31;
  const m = 1_000_000_007;

  let hashValue = 0;

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }

  return hashValue;
}

function solution(stringList, queryList) {
  const set = new Set(stringList.map((str) => hashing(str)));

  return queryList.map((query) => set.has(hashing(query)));
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"]),
);
