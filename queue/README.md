# Queue 큐

## 개념 정리

- 큐
  - 먼저 들어간 데이터가 먼저 나오는 자료구조
  - 선입선출, FIFO
  - push하면 맨 뒤에 들어감, pop하면 맨 앞 요소가 꺼내짐
- 활용
  - 여러 이벤트가 발생했을 때 발생한 순서대로 처리할 때 활용
  - ex. 작업 대기열, 이벤트 처리 등
- ADT
  - 연산
    - boolean isFull() 큐에 있는 데이터의 수가 최대 크기인지 확인
    - boolean isEmpty() 큐에 데이터가 비어있는지 확인 → front === rear 인지 확인
    - void push(ItemType item) 큐에 데이터 푸시
    - ItemType pop() 큐 가장 앞에 있는 데이터 꺼내어 반환
  - 상태
    - int front 큐에서 가장 처음에 팝한 위치를 기록
    - int rear 큐에서 최근에 푸시한 데이터의 위치
    - ItemType data[maxsize] 큐의 데이터를 관리하는 배열
- 자바스크립트 활용
  - shift() 메서드 활용
    - shift 메서드는 배열의 가장 첫 번째 요소를 삭제함. push, shift를 활용하면 큐의 선입선출을 흉내낼 수 있지만 shift 메서드의 시간 복잡도가 O(1)이 아니기 때문에 진짜 큐가 아님.
    - 코드
      ```jsx
      const queue = [];
      queue.push(1);
      const first = queue.shift();
      ```
  - 배열 이용한 큐 클래스
    - 코드

      ```jsx
      class Queue {
        items = [];
        front = 0;
        rear = 0;

        push(item) {
          this.items.push(item);
          this.rear++;
        }

        pop() {
          return this.items[this.front++];
        }

        isEmpty() {
          return this.front === this.rear;
        }
      }
      ```

  - 연결 리스트 이용
    - 코드

      ```jsx
      class Node {
        constructor(data) {
          this.data = data;
          this.next = null;
        }
      }

      class Queue {
        constructor() {
          this.head = null;
          this.tail = null;
          this.size = 0;
        }

        push(data) {
          const newNode = new Node(data);

          if (!this.head) {
            // 큐가 비어있는 경우
            this.head = newNode;
            this.tail = newNode;
          } else {
            this.tail.next = newNode;
            this.tail = newNode;
          }

          this.size++;
        }

        pop() {
          if (!this.head) {
            return null;
          }

          const removeNode = this.head;
          this.head = this.head.next;

          // 모두 pop해 비게된 경우
          if (!this.head) {
            this.tail = null;
          }

          this.size--;

          return removeNode.data;
        }

        isEmpty() {
          return this.size === 0;
        }
      }
      ```

## 참고자료

- [코딩 테스트 합격자 되기 자바스크립트 편 7장](https://github.com/kciter/coding-interview-js)
