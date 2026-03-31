let name;
let food;
let hobby;
let career;

document.getElementById("funnyForm").addEventListener("submit", function(event){
    event.preventDefault();
    name=document.getElementById("name").value;
    food=document.getElementById("food").value;
    hobby=document.getElementById("hobby").value;
    career=document.getElementById("career").value;

    document.getElementById("output").textContent =`Meet ${name}, a future ${career} who survives only on ${food}, while secretly practicing ${hobby} every night!`;
    
});