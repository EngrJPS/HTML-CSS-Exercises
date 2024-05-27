/*
Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
*/

const evensAndOdds = (num) =>{
    let even = 0;
    let odd = 0;

    for(let i = 0; i <= num; i++){
        if(i % 2){
            even++;
        }else{
            odd++;
        }
    }

    return `The number of odds are ${odd}\nThe number of evens are ${even}`;
};

console.log(evensAndOdds(49));