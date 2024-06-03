const countriesAPI = 'https://restcountries.com/v2/all'

const returnPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const animals = ["Ants", "Birds", "Cats", "Dogs"];
        if(animals.length > 0){
            resolve(animals);
        }else{
            reject("Something went wrong");
        }
    }, 2000);
});

returnPromise.then(output => console.log(output)).catch(err => console.log(err));


// This is a lot cleaner code

function returnAnotherPromise(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            const fruits = ["Apple", "Banana", "Citrus", "Orange"];
            if(fruits.length > 0){
                res({
                    name: "There's a fruit",
                    message: "The basket is full of fruits"
                })
            }else{
                rej("No fruits in the basket");
            }
        }, 3000);
    });
}

returnAnotherPromise().then((output) => console.log(`Success: ${output.message}`)).catch((err) => console.log(err));

// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.

fetch(countriesAPI)
.then((response) => response.json())
.then((data) => {
    for(const item of data){
        console.log(item.name, item.capital, item.languages, item.population + " and " + item.area);
    }
})
.catch((err) => console.log(err));