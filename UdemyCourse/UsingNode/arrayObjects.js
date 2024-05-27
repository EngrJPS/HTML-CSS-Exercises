let blogs = [];

// Blog constructor
function BlogPosts(title, content){
    this.title = title,
    this.content = content,
    this.date = new Date().getDate();
    this.logContent = function (){
        console.log(this.title + " " + this.content);
    };
};

// Adding blogs
function addPost(title, content){
    let blog_title = title;
    let blog_content = content;
    let blog_post = new BlogPosts(blog_title, blog_content);

    blogs.push(blog_post);
};

// Editing blogs
function editBlog(index, title, content){
    blogs[index] = new BlogPosts(title, content);
};
addPost("You are my sunshine", "Please continue here...");
addPost("Create a website using HTML CSS and JS", "HTML CSS are programming languanges also");
addPost("Web development is fun!", "Add some interesting content here");


console.log(blogs[2].logContent());

// editBlog(0, "This is a new title", "This is a new content");

// console.log(blogs);