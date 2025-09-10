const students = [
  {
    name: "John",
    roll: 1,
    grade: "10th",
    dob: "1999-01-15",
  },
  {
    name: "Seth",
    roll: 2,
    grade: "11th",
    dob: "2005-02-20",
  },
  {
    name: "Kane",
    roll: 3,
    grade: "12th",
    dob: "1996-01-01",
  },
  {
    name: "Roman",
    roll: 4,
    grade: "8th",
    dob: "2010-12-01",
  },
  {
    name: "steve",
    roll: 5,
    grade: "12th",
    dob: "1995-10-10",
  },
  {
    name: "Robert",
    roll: 10,
    grade: "4th",
    dob: "2018-06-07",
  },
  {
    name: "Corona",
    roll: 20,
    grade: "2th",
    dob: "2020-06-07",
  },
];

//List of names of students
const nameList = students.map((student) => student.name);
console.log(nameList);

//Filter age less than 10
const currentYear = new Date().getFullYear();
const ageFilter = students.filter(
  (student) => currentYear - new Date(student.dob).getFullYear() < 10
);
console.log(ageFilter);

//Average age of students
const totalAge = students.reduce(
  (acc, student) => acc + (currentYear - new Date(student.dob).getFullYear()),
  0
);
const avgAge = totalAge / students.length;
console.log(avgAge);

// check whether every student'age belong to GenZ
const isGenZ = (student) => {
  const birthYear = new Date(student.dob).getFullYear();
  return birthYear >= 1997 && birthYear <= 2012;
};
const result = students.every(isGenZ);
console.log(result ? "Every student is GenZ." : "Not Every sutdent is GenZ.");

//list only GenZ students
const genZ = students.filter(isGenZ);
console.log(genZ);
