function findHighestMark(marks) {
  let highest = marks[0];
  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i]; 
    }
  }
  return highest;
}
const marksArray = [56, 78, 92, 65, 89, 99];
console.log("Highest mark is:", findHighestMark(marksArray));
