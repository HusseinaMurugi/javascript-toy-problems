function gradeGenerator(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 49) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

let marks = prompt("Enter student marks (0-100):");
marks = Number(marks);

alert("Grade: " + gradeGenerator(marks));
