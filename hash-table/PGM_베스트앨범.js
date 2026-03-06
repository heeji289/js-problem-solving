/**
 * 1. 장르별로
 *    - 총 재생 수(totalPlay)
 *    - 해당 장르에 속한 곡 목록 [고유번호, 재생 수] 를 함께 모은다.
 *
 * 2. 장르를 총 재생 수 기준으로 내림차순 정렬한다.
 *
 * 3. 각 장르 내부의 곡을 정렬한다.
 *    - 재생 수 내림차순
 *    - 재생 수가 같으면 고유번호 오름차순
 *
 * 4. 각 장르에서 상위 2곡만 꺼내어 정답 배열에 담는다.
 *
 * 오답 발생한 부분
 * - 총 재생 횟수가 높은 앨범 2개라고 잘못 이해해서 slice(0,2)를 넣었음. 이 부분 제외하니 통과
 */
function solution1(genres, plays) {
  const topAlbums = {};

  for (let i = 0; i < genres.length; i++) {
    if (topAlbums[genres[i]]) {
      topAlbums[genres[i]] = {
        totalPlay: topAlbums[genres[i]].totalPlay + plays[i],
        plays: [...topAlbums[genres[i]].plays, [i, plays[i]]],
      };
    } else {
      topAlbums[genres[i]] = {
        totalPlay: plays[i],
        plays: [[i, plays[i]]],
      };
    }
  }

  const sorted = Object.entries(topAlbums)
    .sort((a, b) => b[1].totalPlay - a[1].totalPlay)
    .flatMap(([_, value]) =>
      value.plays
        .sort((a, b) => {
          if (b[1] !== a[1]) return b[1] - a[1];
          return a[0] - b[0];
        })
        .slice(0, 2),
    )
    .flatMap(([num, _]) => num);

  return sorted;
}

/**
 * 제미나이와 코드 개선
 * - 값을 누적하므로 for문 대신 acc 활용해 선언적으로
 * -
 */
function solution2(genres, plays) {
  const genreMap = genres.reduce((acc, genre, i) => {
    if (!acc[genre]) {
      acc[genre] = { total: 0, songs: [] };
    }

    acc[genre].total += plays[i];
    acc[genre].songs.push({ id: i, play: plays[i] });

    return acc;
  }, {});

  return Object.values(genreMap)
    .sort((a, b) => b.total - a.total)
    .flatMap(({ songs }) =>
      songs
        .sort((a, b) => b.play - a.play || a.id - b.id)
        .slice(0, 2)
        .map((song) => song.id),
    );
}
