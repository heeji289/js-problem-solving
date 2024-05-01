const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const queue = [];
let pointer = 0;
const answer = [];

for (const line of input) {
  const [command, value] = line.split(' ');

  switch (command) {
    case 'push': {
      queue.push(value);
      break;
    }

    case 'pop': {
      if (queue.length === pointer) {
        answer.push(-1);
      } else {
        answer.push(queue[pointer]);
        pointer++;
      }
      break;
    }

    case 'size': {
      answer.push(queue.length - pointer);
      break;
    }

    case 'empty': {
      answer.push(queue.length === pointer ? 1 : 0);
      break;
    }

    case 'front': {
      const front = queue.length === pointer ? -1 : queue[pointer];
      answer.push(front);
      break;
    }

    case 'back': {
      const back = queue.length === pointer ? -1 : queue[queue.length - 1];
      answer.push(back);
      break;
    }
  }
}

console.log(answer.join('\n'));
