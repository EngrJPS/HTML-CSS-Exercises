import express, { urlencoded } from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let htmlHeader;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    htmlHeader = {
        content: "<h1> Enter your name below 👇</h1>"
    };
    res.render("index2.ejs", htmlHeader);
});

app.post("/submit", (req, res) => {
    const fstName = req.body.fName;
    const lstName = req.body.lName;
    let numName = fstName.length + lstName.length
    htmlHeader.content = `<h1>There are ${numName} letters in your name.`
    res.render("index2.ejs", htmlHeader);
});

app.listen(port, () => {
    console.log(`Application is listening on ${port}.`);
});