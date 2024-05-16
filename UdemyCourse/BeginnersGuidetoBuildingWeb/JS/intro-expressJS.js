import express from "express";
import bdyPrsr from "body-parser";

const runTime = express();
const lstnPort = 3000;


//This is a middleware
runTime.use(bdyPrsr.urlencoded({extended: true}));

runTime.get("/", (req, res) => {
    res.sendFile("/HTML/intro-middlewareBodyParser.html", {root: '.'});
});

runTime.post("/submit", (req, res) => {
    console.log(req.body);
})

runTime.listen(lstnPort, () => {
    console.log(`Server running on port ${lstnPort}.`);
});

