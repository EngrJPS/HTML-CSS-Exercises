let counter = 0;
function darkMode(){
    counter++;
    if(counter % 2 !== 0){
        document.getElementById("htmlHeader").innerHTML = "<html lang='en' id='htmlHeader' data-bs-theme='dark'>"
    }else{
        document.getElementById("htmlHeader").innerHTML = "<html lang='en' id='htmlHeader'>"
    }
}