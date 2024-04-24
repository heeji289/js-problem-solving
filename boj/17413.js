/**
 * 17413
 *
 * <*> = 태그, 그 외는 단어이며 단어는 공백으로 구분한다
 * 문자열을 순회하면서
 * 1. <를 만나면 이전까지 단어였다는 뜻이므로 뒤집어준다
 * 2. >를 만나면 이전까지 태그의 단어였다는 뜻이므로 이걸 붙인다.
 * 3. 공백을 만나면 지금 isTagOpen이면 그냥 붙이고 아니라면 단어 구분자이므로 뒤집는다
 * 4. 그 외는 단어들이고 저장한다
 */
const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

let isTagOpen = false;
let word = '';
let answer = '';

function reverseString(str) {
  return str.split('').reverse().join('');
}

for (const str of input) {
  if (str === '<') {
    isTagOpen = true;
    answer += reverseString(word) + str;
    word = '';
  } else if (str === '>') {
    isTagOpen = false;
    answer += word + str;
    word = '';
  } else if (str === ' ') {
    // isTagOpen이면 그냥 붙이고 아니면 거꾸로해야
    answer += (isTagOpen ? word : reverseString(word)) + str;
    word = '';
  } else {
    word += str;
  }
}

answer += reverseString(word);
console.log(answer);
