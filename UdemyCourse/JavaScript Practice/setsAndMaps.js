// create an empty set
let num = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numSet = new Set();
console.log(numSet); // Output: Set(0) {size: 0}

// Create a set containing 0 to 10 using loop
for(let number in num){
    numSet.add(number);
};

console.log(numSet); //Set(11) {'0', '1', '2', '3', '4', …}

// Remove an element from a set
console.log(numSet.delete('4')); //true
console.log(numSet.size); //10

// Clear a set
numSet.clear();

// Create a set of 5 string elements from array
for(let i = 0; i < num.length; i++){
    if(i < 5){
        numSet.add(num[i]);
    }
};

console.log(numSet.forEach((item) => console.log(item)) +" "+ numSet.size);

// Create a map of countries and number of characters of a country
// object holds key-value pairs
let countries2 = [["a", "Finland"], ["b", "Sweden"], ["c", "Norway"]];
const newCountries = new Map(countries2);

console.log(newCountries.get("a"));

for(const [item, country] of newCountries){
    console.log(item +" "+country.length);
};

// Exercises: Level 2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries1 = ['Finland', 'Sweden', 'Norway'];

// 1. Find a union b

const c1 = [...a, ...b];

let C1 = new Set(c1);
console.log(C1); // Set(6) {4, 5, 8, 9, 3, …}
// 2. Find a intersection b
const B2 = new Set(b);
let c2 = a.filter((item) => B2.has(item));
let C2 = new Set(c2);

console.log(C2); // Set(2) {4, 5}
// 3. Find a with 

const B3 = new Set(b);
let c3 = a.filter((item) => !B3.has(item));
let C3 = new Set(c3);

console.log(C3); //Set(2) {8, 9}

// Exercises:Level 3

// 1. How many languages are there in the countries object file.
let arrayLang = [];
let counts = [];

let countryLang = countries.map((items) => items.languages);

for(let i = 0; i < countryLang.length; i++){
    let tempArray = countryLang[i];
    for(let j =0; j < tempArray.length; j++){
        arrayLang.push(tempArray[j]);
    }
}
const setOfLang = new Set(arrayLang);

console.log(setOfLang.size); // 112
// console.log(setOfLang); Set(112) {'Pashto', 'Uzbek', 'Turkmen', 'Swedish', 'Albanian', …}

// 2. Use the countries data to find the 10 most spoken languages:

function mostSpokenLanguages(country, num){
    // The for...of statement executes a loop that operates on a sequence of values sourced from an object
    for(const langs of country){
        const filterLang = arrayLang.filter((elem) => elem === langs);
        for(let i = 0; i < num; i++){
            console.log(filterLang);
            counts.push({lang: langs, count: filterLang.length});
        }
    };

    return counts;
}

console.log(mostSpokenLanguages(setOfLang, 2));