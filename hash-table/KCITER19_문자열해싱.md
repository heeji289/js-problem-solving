- 문제: [문자열 해싱을 이용한 검색 함수 만들기](https://github.com/kciter/coding-interview-js/blob/main/solution/19.js)
- 상태: 🟡 비효율
- 복습필요: Y

## 1. 문제 설명

- 문자열 해싱 함수를 구현해 해시 테이블을 만들어라.
  > H(s0, s1, ..., sk) = (s0 _ pk-1 + s1 _ pk-2 + ... + sk \* p0) mod M

## 2. 내 접근 방식

단순하게 함수 그대로 구현했다.

```js
function hashing(str) {
  const p = 31;
  const m = 1_000_000_007;

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += str[i].charCodeAt(0) * Math.pow(p, i);
  }

  return sum % m;
}

function solution(stringList, queryList) {
  const set = new Set();

  for (const str of stringList) {
    const hashed = hashing(str);
    set.add(hashed);
  }

  return queryList.map((query) => set.has(hashing(query)));
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"]),
);
```

## 3. 틀린 이유

- 매 문자마다 Math.pow()를 호출하면 문자열 길이가 10^6일 때 매우 비싸고 값이 매우 커진다.
- `p^i`가 매우 커지면서 정밀도 문제가 발생할 수 있음
- % m을 마지막에 한 번만 적용해 중간에 값이 터지는 걸 제어하기 힘들다.

## 4. 올바른 접근 및 풀이

- 매번 pow로 제곱 연산을 하는 것이 아니라 누적하는 방식으로 개선이 필요하다.

```js
let hashValue = 0;

for (let i = 0; i < str.length; i++) {
  hashValue = (hashValue * p + str.charCodeAt(i)) % m;
}
```

이렇게 해주면 매번 제곱연산 하지 않고 순회할 때마다 모듈러 연산을 해주어 중간 값이 과도하게 커지는 것을 방지할 수 있음.
그리고 `(hashValue * p + x)`는 pow 없이도 다항식 형태의 해시를 O(N)으로 계산할 수 있음

```
hash0 = a
hash1 = (a * p + b)
hash2 = (a * p^2 + b * p + c)
```

## 5. 배운 점

- `str.charCodeAt(i)`로 문자열의 유니코드를 구할 수 있음
- 다항식 계산 or 10진수 만들기 등을 할 때 Math.pow() 바로 제곱 연산하는 것이 아니라 누적곱으로 구하는 게 효율적
