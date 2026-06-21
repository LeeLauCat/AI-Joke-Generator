const jokeEl = document.getElementById('joke');          // div id = joke        
const get_joke = document.getElementById('get_joke');    // button id = get_joke 

get_joke.addEventListener('click', generateJoke);
generateJoke();                                          

async function generateJoke() {

    jokeEl.innerHTML = "Loading...";
    get_joke.disabled = true;

    try {
        const jokeRes = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });

        const joke = await jokeRes.json();

        jokeEl.innerHTML = joke.joke;
    }
    catch(error) {
        jokeEl.innerHTML = "Failed to load joke.";
    }
    finally {
        get_joke.disabled = false;
    }
}