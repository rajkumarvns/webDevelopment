function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("Passwords")) || [];

  const showData = document.getElementById("passwordData");

  if (data.length === 0) {
    showData.innerHTML = `
      <tr>
        <td colspan="3">No Password Saved</td>
      </tr>
    `;

    return;
  }

  data.forEach((element) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${element.WebsiteName}</td>
      <td>${element.UserName}</td>
      <td>${element.Password}</td>
    `;

    showData.appendChild(tr);
  });
}

getDataFromLocalStorage();
