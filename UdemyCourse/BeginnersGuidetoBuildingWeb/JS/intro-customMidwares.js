import express from "express";
// import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let bandName = "";
// app.use(morgan("short"));

// const logger = function(req, res, next){
//     console.log("Requested method is: " + req.method);
//     console.log("Requested URL is: " + req.url);
//     console.log("The hostname of the server is: " + req.hostname);
//     next();
// };

app.use(bodyParser.urlencoded({extended: true}));

function bandNameGen (req, res, next){
    //req.body["stName"] req.body["ptName"]
    bandName = req.body.stName + "" + req.body.ptName + "🤯";
    next();
}

app.use(bandNameGen);

app.get("/", (req, res) => {
    res.sendFile("/HTML/intro-middlewareBodyParser.html", {root: "."});
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});