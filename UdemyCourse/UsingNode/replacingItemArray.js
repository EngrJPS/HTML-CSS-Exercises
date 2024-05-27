/* 
Create a function that replaces the values from the existing array
 - Make it a higher order function
*/

const basketOfFruits = ["Banana", "Watermelon", "Grapes", "Orange", "Apple"];

// Regular function
function itemReplace(index, fruits){
    return basketOfFruits[index] = fruits;
}

//Arrow function
const replacer = (index, fruits, replacer) =>{
    replacer(index, fruits);
};

// forEach(element/item, index, array) or
// forEach(myFunction(element/item, index, array), thisArg)
basketOfFruits.forEach((item) => console.log(`Items inside the arrays are: ${item}`));

replacer(2, "Tomato", itemReplace);
console.log(" ");

basketOfFruits.forEach((item) => console.log(`Items inside the arrays are: ${item}`));

//forEach is good if you want to change the characteristics/properties of each values of the arrays without changing the original array

console.log("forEach Method\n");
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

console.log(countries + "\n");

// map(element/item, index, array) { returns element/item }
console.log("map Method");
const modifiedCountries = countries.map((item) => item.toUpperCase());

console.log(modifiedCountries);

// With arrow functions, you need to put return key word to return an array
// With explicit functions, you don't need to explicitly put the return keyword in the function
const filteredCountries = countries.filter((objectCharacter) => {
    return objectCharacter.endsWith("en");
});

console.log(filteredCountries);