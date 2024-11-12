const fs = require('fs').readFileSync('example.txt').toString();
const input = fs.trim().split('\n');

const tc = Number(input[0]);
const cards = [];

for (let i = 1; i < input.length; i++) {
  if (i % 2 === 1) continue;

  cards.push(input[i].split(' '));
}

const totalAnswer = [];

for (let i = 0; i < tc; i++) {
  const currCards = cards[i];
  let answer = [currCards[0]];

  for (let j = 1; j < currCards.length; j++) {
    if (currCards[j].charCodeAt(0) <= answer[0].charCodeAt(0))
      answer = [currCards[j], ...answer];
    else answer = [...answer, currCards[j]];
  }

  totalAnswer.push(answer.join(''));
}

console.log(totalAnswer.join('\n'));
