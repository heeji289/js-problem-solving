/**
 * 1620
 *
 * 포켓몬 이름 -> 번호
 * 번호 -> 이름
 *
 * N (도감개수), M (맞춰야 하는 문제 개수)
 *
 * 그다음 1부터 N까지 도감 한줄 씩
 */
const fs = require('fs');
const [counts, ...lines] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = counts.split(' ').map((v) => Number(v));
const info = lines.slice(0, n);
const problem = lines.slice(n);

const map = new Map();

for (let i = 0; i < n; i++) {
  const name = info[i];

  map.set(i + 1, name);
  map.set(name, i + 1);
}

console.log(map);

for (const p of problem) {
  console.log(p);
  console.log(map.get(p));
}
