/**
 * 문제 생각
 * - 연속된 0의 개수?
 * - 1001 -> 양쪽 사이에 0이 2개여서 binary gap = 2
 * - 1과 1 사이에 있는 0의 개수
 * - 정수 N을 주면 가장 긴 binary gap을 구해라. 만약 없으면 0을 리턴.
 *
 * 설계
 * 1. 정수를 이진수로 바꾼다.
 *  1) 정수 N을 2로 나누고
 *  2) -> 몫으로 다시 호출하고 -> 나머지는 뒤에서부터 저장
 *  3) 몫이 1이면 종료
 * 2. 1 사이의 0 개수를 세고 가장 큰 갭을 리턴
 *  1) 배열을 하나 둠
 *  2) 이진수 문자열을 순회하며 1을 만나면 임시 변수를 0으로 초기화하고
 *  3) 0을 만나면 +1, 1을 만나면 멈추고 임시 값을 배열에 push
 *  4) 배열의 max를 찾아 리턴 (비어있으면 0)
 */

// 2진수 만드는 함수 작성할 필요 없음 -> toString(2)
// function convert2(N, converted) {
//   const quotient = Math.floor(N / 2)
//   const remainder = N % 2

//   if (quotient == 1) {
//       return String(quotient) + String(remainder) + String(converted)
//   }

//   return convert2(quotient, remainder + converted)
// }

function findBinaryGap(binaryN) {
    let maxGap = 0
    let gapCount = 0

    for (const number of binaryN) {
        if (number == 0) {
            gapCount += 1
        } else {
            maxGap = Math.max(maxGap, gapCount)
            gapCount = 0;
        }
    }

    return maxGap
}

function solution(N) {
const result = N.toString(2)
return findBinaryGap(result)
}

console.log(solution(1041))
