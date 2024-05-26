//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let userAuthorization = false;


app.use(bodyParser.urlencoded({extended: true}));

function authChecker(req, res, next){
    const userPass = req.body.password;
    if(userPass === "ILoveProgramming"){
        userAuthorization = true;
    }
    next();
}

app.use(authChecker);

app.get("/", (req, res) => {
    res.sendFile("/public/index.html", { root: "."});
})

app.post("/check", (req, res) => {
    if(!userAuthorization){
        res.sendFile("/public/index.html", {root: "."});
    }else{
        res.sendFile("/public/secret.html", {root: "."});
    }
    console.log(req.body);
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});