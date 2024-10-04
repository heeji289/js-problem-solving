/**
 * array A, integer N
 * rotation -> 오른쪽으로 하나씩 밀어
 * goal: rotate array A K times
 */

function solution(A, K) {
    const lastIndexOfA = A.length - 1

    if (A.length < 1 || A % K === 0) {
        return []
    }

    for (let i = 0; i < K; i++) {
        A = [A[lastIndexOfA]].concat(A.slice(0, lastIndexOfA))
    }

    return A
}

console.log(solution([3, 8, 9, 7, 6], 3))
