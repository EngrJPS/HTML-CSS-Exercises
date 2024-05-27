/*
Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
*/

// function checkSeason(month){
//     switch (month) {
//         case "December":
//             console.log("Winter");
//             break;
//         case "January":
//             console.log("Winter");
//             break;
//         case "February":
//             console.log("Winter");
//             break;
//         case "March":
//             console.log("Spring");
//             break;
//         case "April":
//             console.log("Spring");
//             break;
//         case "May":
//             console.log("Spring");
//             break;
//         case "June":
//             console.log("Summer");
//             break;
//         case "July":
//             console.log("Summer");
//             break;
//         case "August":
//             console.log("Summer");
//             break;
//         case "September":
//             console.log("Autumn");
//             break;
//         case "October":
//             console.log("Autumn");
//             break;
//         case "November":
//             console.log("Autumn");
//             break;
//         default:
//             console.log("No season for the input");
//             break;
//     }
// };


const checkSeason = (year, month) => {
    const userDate = new Date(year, month);
    const monthOfYear = userDate.getMonth();
    if(monthOfYear >= 2 && monthOfYear < 5){
        return "Spring"
    }else if(monthOfYear >= 6 && monthOfYear < 8){
        return "Summer"
    }else if(monthOfYear >= 9 && monthOfYear < 11){
        return "Autumn"
    }else{
        return "Winter"
    }
};

console.log(checkSeason(2017, 0));

