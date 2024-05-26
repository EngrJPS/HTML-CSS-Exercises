import express from "express";
const app = express();
const port = 3000;

let blogs = [];

function BlogPost(title, content){
    this.title = title;
    this.content = content;
    this.formatDate = new Date();
    this.date = this.formatDate.toLocaleString();
};

function addBlog(title, content){
    let postBlog = new BlogPost(title, content);
    blogs.push(postBlog);
};

function editBlog(index, title, content){
    blogs[index] = new BlogPost(title, content);
    console.log(blogs);
    console.log(blogs[index]);
    console.log(blogs);
};

function deleteBlog(index){
    blogs.splice(index, 1)
};

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.render("index.ejs", {blogs: blogs});
});

app.get("/content/:id", (req, res) => {
    let postId = req.params.id;
    let blogContent = blogs[postId];

    res.render("content.ejs", {
        id: postId,
        title: blogContent.title,
        content: blogContent.content
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/update", (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let index = req.body.blogId;

    console.log(req.body);
    editBlog(index, title, content);
    res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
    let i = req.params.id;
    let poster = blogs[i];

    res.render("create.ejs", {
        posterId: i, 
        title: poster.title, 
        content: poster.content
    });
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/delete", (req, res) => {
    let delIndex = req.body.index;
    deleteBlog(delIndex);
    res.redirect("/")
});

app.post("/save", (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    
    addBlog(title, content);
    console.log(blogs);
    res.redirect("/");
});

app.listen(port, () => {
    addBlog("Main title", "This is a temp paragraph");
    addBlog("Sub title", "This is a temp paragraph");
    addBlog("Sub title", "This is a temp paragraph");
    console.log(`Application is running on port ${port}.`);
});