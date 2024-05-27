// Data to work with
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Exercise 1:

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoiling] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoiling);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Destructure the rectangle object by its properties or keys.
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);


// Exercise 2

// Iterate through the users array and get all the keys of the object using destructuring

for(const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age);
}

// Find the persons who have less than two skills

for(const {name, scores, skills, age} of users){
    if(skills.length <= 2){
        
        console.log(name + " has only 2 skills or less.");
    }else{
        console.log(name + " has more than 2 sets of skills");
    }
}

// Exercise 3

/*A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.*/

const student = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

for(const [names, skills, techScore] of student){
    let [htmlScore, cssScore, jsScore, reactScore] = techScore;
    console.log(names, skills, jsScore, reactScore); // David (4) ["HTML", "CSS", "JS", "React"] 90 95
};

/*
Write a function called convertArrayToObject which can convert the array to a structure object.
*/ 


const convertArrayToObject = (obj) =>{
    const arrayStudent = [];
    for(const [names, skills, techScore] of obj){
        const mappedObj = {
            name: names,
            skill: skills,
            techScores: techScore
        }
        arrayStudent.push(mappedObj);
    }
    return arrayStudent;
}

console.log(convertArrayToObject(student));