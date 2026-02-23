const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const answer = [];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.head === null) {
      return -1;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head ? this.head.value : -1;
  }

  peek_back() {
    return this.tail ? this.tail.value : -1;
  }
}

const queue = new Queue();

for (const line of input) {
  const [command, value] = line.split(' ');

  switch (command) {
    case 'push': {
      queue.enqueue(Number(value));
      break;
    }

    case 'pop': {
      const value = queue.dequeue();
      answer.push(value);
      break;
    }

    case 'size': {
      answer.push(queue.size);
      break;
    }

    case 'empty': {
      answer.push(queue.size === 0 ? 1 : 0);
      break;
    }

    case 'front': {
      answer.push(queue.peek());
      break;
    }

    case 'back': {
      answer.push(queue.peek_back());
      break;
    }
  }
}

console.log(answer.join('\n'));
