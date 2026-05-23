async function GetNewJokes() {
  const API_URL = "https://official-joke-api.appspot.com/jokes/random";
  const response = await fetch(API_URL);

  const data = await response.json();

  //   if(data.type === "single"){
  //     document.getElementById("setup").innerText = data.joke || data.setup;
  //   }
  //   else{
  //     document.getElementById("punchline").innerText = data.punchline || "";
  //   }

  document.getElementById("setup").innerText = data.joke || data.setup;
  document.getElementById("punchline").innerText = data.punchline || "";
}
