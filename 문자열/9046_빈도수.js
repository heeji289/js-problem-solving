/**
 * 문제: 주어진 문자열에서 빈도수 높은 문자 출력, 여러개면 물음표 출력
 *
 * 풀이과정
 * - 공백이 있으므로 공백 제거해주기
 */
const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (const line of input) {
  const freq = {};

  // 모든 공백 제거 후 문자 빈도 계산
  for (const char of line.replace(/\s/g, '')) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let max = 0;
  let maxKey = '';

  // 최대 빈도수 및 해당 문자 찾기
  for (const key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      maxKey = key;
    }
  }

  let maxCount = 0;

  // 최대 빈도를 갖는 문자가 여러 개인지 확인
  for (const key in freq) {
    if (freq[key] === max) {
      maxCount++;
    }
  }

  // 결과 출력
  const answer = maxCount > 1 ? '?' : maxKey;
  console.log(answer);
}
