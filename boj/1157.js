/**
 * 1157
 *
 * 일단은 문자열을 순회하면서 빈도수를 체크해야겠지?
 * 근데 대소문자 구분이 없으니까.. uppercase, lowercase 메소드들을 사용해야할 것 같고
 * freq 객체에서 max찾고 maxKey 찾고 여러개면 물음표 출력하고~
 *
 * 알게된 것
 * - string.toUpperCase()
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const freq = {};

for (const str of input) {
  const strKey = str.toUpperCase();

  freq[strKey] = (freq[strKey] ?? 0) + 1;
}

let maxKey = '';
let maxCount = 0;

for (const [key, value] of Object.entries(freq)) {
  if (maxCount < value) {
    maxKey = key;
    maxCount = value;
  }
}

const isMultiMax =
  Object.values(freq).filter((value) => value === maxCount).length > 1;

const answer = isMultiMax ? '?' : maxKey;

console.log(answer);
