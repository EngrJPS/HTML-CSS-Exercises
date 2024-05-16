import express from "express";

const runningApp = express();
const portLstng = 3000;

runningApp.get("/", (req, res) => {
    res.send("<h1>Welcome to my page!</h1>");
});

runningApp.post("/register", (req, res) => {
    res.sendStatus(201);
});

runningApp.put("/register/user", (req, res) => {
    res.sendStatus(200);
});

runningApp.patch("/register/user1", (req, res) => {
    res.sendStatus(200);
});

runningApp.delete("/register/user2", (req, res) => {
    res.sendStatus(200);
});

runningApp.listen(portLstng, () => {
    console.log(`My website is running on port ${portLstng}`);
});

