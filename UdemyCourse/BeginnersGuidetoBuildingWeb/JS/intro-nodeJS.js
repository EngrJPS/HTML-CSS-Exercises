// const fileSystem = require("fs");

//This function is for writing files
// fileSystem.writeFile("log.txt", "Hello World from me and the rest of the world!", (err) =>{
//     if(err) throw err;
//     console.log("The file has been saved!");
// });

//This function is for reading files
// fileSystem.readFile("./log.txt", "utf-8", (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// import genName from "sillyname";
// import superName from "superheroes";
// let sillyName = genName();


// console.log(`Not be afraid because here is ${superName.random()}!`);

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get(port, () => {
    console.log(`Application is listening to ${port}`);
})