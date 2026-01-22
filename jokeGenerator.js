const btn = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

btn.addEventListener("click", getJoke);

// Load a joke on page load
getJoke();

async function getJoke() {
  try {
    btn.disabled = true;
    btn.textContent = "Loading...";

    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }

    const data = await response.json();

    jokeEl.textContent = `${data.setup} 😂 ${data.punchline}`;
  } catch (error) {
    jokeEl.textContent = "Oops! Could not load a joke 😢";
  } finally {
    btn.disabled = false;
    btn.textContent = "Get Joke";
  }
}
