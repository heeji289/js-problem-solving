/**
 * 문제: 쇠막대기에 레이저 쏴서 나오는 막대 개수를 구한다. 이는 괄호로 표현된다.
 * 핵심개념: 스택 응용
 *
 * 풀이과정
 * (의 경우
 * 1) 레이저 시작 포인트
 * 2) 쇠막대기 시작 포인트
 * => 두 경우 모두 일단 stack에 넣어준다.
 *
 * )인 경우
 * 1) 레이저 종료 포인트
 * 2) 쇠막대기 종료 포인트
 * => 일단 pop하고
 * => 직전 문자 확인해서 (인 경우는 레이저이므로 stack 길이 만큼 정답에 추가 (현재 스택 길이가 쇠막대기 열려있는 개수이니까)
 * => 쇠막대기 종료 포인트면 2번 잘리면 3조각 나오는 원리로.. +1 해줘야 한다.
 */
const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

let answer = 0;
const stack = [];

for (let i = 0; i <= input.length - 1; i++) {
  const currStr = input[i];

  if (currStr === '(') {
    stack.push(currStr);
  } else {
    stack.pop();
    answer += input[i - 1] === '(' ? stack.length : 1;
  }
}

console.log(answer);
