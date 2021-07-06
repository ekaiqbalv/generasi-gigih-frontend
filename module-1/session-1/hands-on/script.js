let students = [
  { name: "Alice", age: 20 },
  { name: "Boy", age: 21 },
  { name: "Chandra", age: 20 },
];

let tableOfStudents = document.getElementById("students-list");
let averageAgeResult = document.getElementById("average-age-result");

students.forEach((student) => {
  tableOfStudents.innerHTML += `<tr><td>${student.name}</td><td>${student.age}</td></tr>`;
});

const calculateTotalAge = (acc, { age }) => acc + age;

const calculateAverageAge = () => {
  let totalAge = students.reduce(calculateTotalAge, 0);
  return totalAge / students.length;
};

const onClickCalculateAverageAgeButton = () => {
  let averageAge = calculateAverageAge();
  averageAgeResult.innerHTML = `Average Age: ${averageAge}`;
};
