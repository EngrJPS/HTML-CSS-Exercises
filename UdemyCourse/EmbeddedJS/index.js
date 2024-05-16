import express from "express";

const app = express();
const port = 3000;

// app.use(express(urlencoded({extended: true})))

app.get("/", (req, res) => {
    const todayIs = new Date("2024-04-05");
    const whatDay = todayIs.getDay();

    let dyNw = "It's a weekday";
    let mdNw = "it's time to work hard"

    if(whatDay === 0 || whatDay === 6){
        dyNw = "It's a weekend";
        mdNw = "it's time to have some fun";
    }

    res.render("index.ejs", {
        dayNow: dyNw,
        moodNow: mdNw
    });
});

app.listen(port, ()=>{
    console.log(`Application is running on ${port}`);
});