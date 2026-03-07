/**
 * id_list와 report를 순회하면서 reports, reportedBy에 신고한 사람과 나를 신고한 사람을 각 각 저장해둠
 * 마지막에 id_list 기준으로 순회하면서 reports에 있는 것들 중, reportedBy로 접근했을 때 개수가 k 이상인 것들만 필터링
 * 중복 처리 제거를 위해 둘 다 Set으로 관리
 */
function solution(id_list, report, k) {
  const answer = [];

  const reports = {};
  const reportedBy = {};

  for (const id of id_list) {
    reports[id] = new Set(); // id 유저가 신고한 사람 목록
    reportedBy[id] = new Set(); // id 유저가 신고 당한 사람 목록
  }

  for (const reportItem of report) {
    const [reportUser, reportedUser] = reportItem.split(" ");

    reports[reportUser].add(reportedUser);
    reportedBy[reportedUser].add(reportUser);
  }

  for (const id of id_list) {
    let count = 0;

    for (const reportUsers of reports[id]) {
      if (reportedBy[reportUsers].size >= k) count += 1;
    }

    answer.push(count);
  }

  return answer;
}
