/*
An array of student grades, in a specific format. We must compute the student percentage grade from the student's exam and exercise scores, then combine it with the equivalent letter grade.
An array of exam summary objects. We calculate each exam summary object from all students scores for the respective exam. For instance, we determine the second exam summary object from each student's second exam.

*/

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  let scoreData = Object.keys(scores).map(student => scores[student].scores);

  // transform the above score objects into an array of arrays for exam scores
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  // ...
}

function getExamSummary(examData) {
  // ...
}
