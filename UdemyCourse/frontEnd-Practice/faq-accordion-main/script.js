const elements = document.querySelectorAll(".content");
elements.forEach(element =>{
    element.addEventListener("click", () =>{
        element.classList.toggle("active");
    })
});