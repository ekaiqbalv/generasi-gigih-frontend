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

const waitTimeout = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

const onClickCalculateAverageAgeButton = () => {
  console.log("calculation start");
  waitTimeout(5000).then(() => {
    let averageAge = calculateAverageAge();
    averageAgeResult.innerHTML = `Average Age: ${averageAge}`;
    console.log(`age is ${averageAge}`);
  });
  console.log("second call started");
  waitTimeout(2000).then(() => {
    console.log("second call finished");
    console.log("third call started");
    waitTimeout(5000).then(() => {
      console.log("third call finished");
    });
  });
};
