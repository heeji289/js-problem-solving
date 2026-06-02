function solution(graph, start) {
    // 그래프를 인접 리스트로 변환
    const adjList = {};

    graph.forEach(([u, v]) => {
        if (!adjList[u]) adjList[u] = [];
        adjList[u].push(v);
    });

    // dfs 재귀
    function dfs(node, visited, result) {
        visited.add(node); 
        result.push(node);

        (adjList[node] || []).forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                dfs(neighbor, visited, result);
            }
        })
    }

    const visited = new Set();
    const result = [];
    dfs(start, visited, result);

    return result;
}

console.log(solution([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A'));
console.log(solution([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A'));