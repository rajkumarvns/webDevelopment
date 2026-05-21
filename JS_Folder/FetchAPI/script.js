const URL = "https://emojihub.yurace.pro/api/random";

// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");
btn.addEventListener("click", getFacts);
let promise = fetch(URL);
console.log(promise);

const getFacts = async () => {
  console.log("getting data....");

  let response = await fetch(URL);
  console.log(response); //JSON format
  let data = await response.json();
  console.log(data);
//   factPara.innerHTML = data[0].text;
};
