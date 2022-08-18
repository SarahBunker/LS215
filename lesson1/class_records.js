/*
Grading Area	Weight
Exam	65%
Exercises	35%

Each term has four exams, and several exercises.
Every exam has a fixed maximum score of 100, while exercises have varied maximum score values and counts.
The total maximum point value for all exercises in any term is always 100, regardless of how many exercises the students had to complete. For example, a term may have five exercises with possible score maximums of [30, 20, 10, 20, 20] while another term may have three exercises with possible score maximums of [20, 30, 50].

To determine a student's grade
  first determine the student's average score from the four exams
  sum all the exercise scores
  then apply the weights to compute the student's final percent grade.
  Finally, we determine the letter equivalent grade from the student's percent grade we just computed.

For example, let's assume a term with three exercises with maximum scores of [20, 30, 50]. A student got [90, 80, 95, 71] on her four exams, and [20, 15, 40] on her exercises. To determine her final grade, we follow these steps:

Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
  reduce, store in variable
Compute the student's total exercise score: 20 + 15 + 40 = 75
  reduce, store in variable
Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
Round the percent grade to the nearest integer: 81
Lookup the letter grade in the table above: C
  helper method, using case to return a letter grade
Combine the percent grade and letter grade: "81 (C)"

{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

So for each exam
  compute the average grade, minimum, and maximum

Get Arrays of all test scores for each exam
initialize empty array (for all arrays)
loop 0-3
  initialze empty array
  iteratet through all students and add exam score at current index to empty arrays
  add new array to the outer array

trying reduce
accumulator is a nested array
for each student
  iterate 0-3
  add exam score at current index to nested array at current index

iterating through students exams
get keys of studentScores => array of students
studentScores.[element].scores.exams  => returns an array of exam scores
*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = 0.65
const EXERCISE_WEIGHT = 0.35

let allExamScores = function(studentScores) {
  return Object.keys(studentScores).reduce( function(nestedArray, student) {
    let exams = studentScores[student].scores.exams
    for (let i = 0; i <= 3; i ++ ) {
      nestedArray[i].push(exams[i])
    }
    return nestedArray;
  }, [[],[],[],[]]);
}

let studentScore = function(student) {
  let exams = student.scores.exams
  let exercises = student.scores.exercises

  let examAverage = exams.reduce( (total, current) => total + current) / exams.length;
  let exerciseTotal = exercises.reduce( (total, current) => total + current);
  let exactGrade = (examAverage * EXAM_WEIGHT) + (exerciseTotal * EXERCISE_WEIGHT)
  return Math.round(exactGrade);
}

let letterGrade = function(score) {
  if (score >= 93) return 'A';
  if (score >= 85) return 'B';
  if (score >= 77) return 'C';
  if (score >= 69) return 'D';
  if (score >= 60) return 'E';
  return 'F'
}

// console.log(`letter grade of 81 is ${letterGrade(81)}`);

function generateClassRecordSummary(scores) {
  let students = Object.keys(scores);
  let studentGrades = students.map( function (studentID) {
    let student = scores[studentID];
    let score = studentScore(student);
    let grade = letterGrade(score);
    return `${score} (${grade})`;
  });
  let exams = allExamScores(scores).map( function(exam) {
    let max = Math.max(...exam);
    let min = Math.min(...exam);
    let avg = exam.reduce((total, current) => total + current) / exam.length;
    avg = +avg.toFixed(1)
    return { average: avg, minimum: min, maximum: max};
  });
  return {
    studentGrades: studentGrades,
    exams: exams,
  }
}

let results = generateClassRecordSummary(studentScores);
console.log(results);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

// let exercises = [20, 15, 40];
// let exerciseTotal = exercises.reduce( (total, current) => total + current);
// console.log(exerciseTotal);

// let testStudent = {
//     id: 123456789,
//     scores: {
//       exams: [90, 80, 95, 71],
//       exercises: [20, 15, 40],
//     }}
//
// console.log(allExamScores(studentScores));
// console.log(studentScore(testStudent));
