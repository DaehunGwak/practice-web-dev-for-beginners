function getPassedStudents(students) {
  const studentsWhoPass = [];
  for (let s of students) {
    if (isPass(s)) {
      studentsWhoPass.push(s);
    }
  }
  return studentsWhoPass;
}

function isPass(grade) {
  return typeof grade === "number"
    ? grade >= 3
    : grade <= "C";
}


// main
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = getPassedStudents(allStudents);

console.log(studentsWhoPass);
