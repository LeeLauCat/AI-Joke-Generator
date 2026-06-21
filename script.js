const jokeEl = document.getElementById("joke");
const btn = document.getElementById("get_joke");
const category = document.getElementById("category");

btn.addEventListener("click", generateJoke);

async function generateJoke(){
btn.disabled = true;
jokeEl.innerHTML = "⏳ Loading joke...";

try{
    let url;

if(category.value === "dad"){
url = "https://icanhazdadjoke.com/";
const response = await fetch(url,{
headers:{Accept:"application/json"
}
});

const data = await response.json();
jokeEl.innerHTML =`😂 ${data.joke}`;
}

else{
url ="https://v2.jokeapi.dev/joke/Programming?type=single";
const response =await fetch(url);
const data =await response.json();
jokeEl.innerHTML =`💻 ${data.joke}`;
}}

catch(error){
jokeEl.innerHTML ="❌ Could not load joke.";
}

finally{
btn.disabled = false;
}
}
