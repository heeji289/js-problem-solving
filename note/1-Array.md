

**시간 복잡도**
- 접근: O(1)
- 삽입: O(n)

**고려할 점**
- 할당 가능한 메모리 크기를 확인해야 함
- 중간에 데이터 삽입이 많은지 확인해야 함
- [js 내장 sort 시간 복잡도](https://medium.com/@nailsonisrael/1-algorithms-how-javascripts-sort-works-and-its-time-complexity-11450797dd7b)

**알아둘 메서드**
<배열 생성>
```js
const arr1 = [...new Array(6)].map((_, index) => index + 1); // [1,2,3,4,5,6]
const arr2 = new Array(6).fill(0); // [0,0,0,0,0,0]
```

<unshift 메서드>
```js
const arr = [1,2,3];
arr.unshift(0)
```

<shift 메서드>
```js
const arr = [1,2,3];
const shifted = arr.shift();
// shifted = 1
// arr = [2,3]
```