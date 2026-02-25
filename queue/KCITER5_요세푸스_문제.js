class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    if (this.isEmpty()) return;
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(n, k) {
  const tables = new Queue();

  for (let i = 1; i <= n; i++) {
    tables.push(i);
  }

  while (tables.size() > 1) {
    for (let i = 0; i < k - 1; i++) {
      tables.push(tables.pop());
    }
    tables.pop();
  }

  return tables.pop();
}

console.log(solution(5, 2));
