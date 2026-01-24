function solution(string) {
  const stack = [];

  for (const str of string) {
    if (str === "(") stack.push(str);
    else if (str === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(solution("(())()"));
console.log(solution("((())()"));
