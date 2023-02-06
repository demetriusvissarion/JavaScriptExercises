// it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  return str.endsWith(ending);
}

solution("Paris", "ris"); // returns true
solution("GareDuNord", "t"); // returns false
