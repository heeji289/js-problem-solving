function isInRange(index, length) {
  return -1 < index && index < length;
}

function solution(cards1, cards2, goal) {
  var answer = "Yes";

  let cardCursor1 = 0;
  let cardCursor2 = 0;

  for (const word of goal) {
    if (isInRange(cardCursor1, cards1.length) && cards1[cardCursor1] === word) {
      cardCursor1++;
    } else if (
      isInRange(cardCursor2, cards2.length) &&
      cards2[cardCursor2] === word
    ) {
      cardCursor2++;
    } else {
      answer = "No";
      break;
    }
  }

  return answer;
}
