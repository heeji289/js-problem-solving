function solution(n, words) {
  const set = new Set([words[0]]);
  let lastWord = words[0];

  for (let i = 1; i < words.length; i++) {
    const number = (i % n) + 1; // 몇 번째 사람
    const th = Math.floor(i / n) + 1; // 몇 번째 턴

    // 앞 사람과 단어가 이어지지 않거나 이미 나온 단어를 선택한 경우 탈락
    if (lastWord.at(-1) !== words[i][0] || set.has(words[i])) {
      return [number, th];
    }

    lastWord = words[i];
    set.add(words[i]);
  }

  return [0, 0];
}
