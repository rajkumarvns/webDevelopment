function Submit(event) {
  event.preventDefault(); // stops page reload

  console.log("Submit button click");

  const fullName = document.getElementById("fullName").value;
  console.log(fullName);

  const cityName = document.getElementById("CityName").value;
  console.log(cityName);

  document.getElementById("myData").innerText = fullName;
  document.getElementById("myData2").innerText = cityName;

  document.getElementById("fullName").value = "";
  document.getElementById("CityName").value = "";

  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("dataCard").classList.remove("divHide");
}
