const calculateBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

calculateBtn.addEventListener("click", function () {
  let units = Number(document.getElementById("Units").value);

  // Validation
  if (units < 0 || isNaN(units) || units === "") {
    alert("Please enter valid positive units");
    return;
  }

  let remainingUnits = units;

  // Slab Units
  let slab1Units = 0;
  let slab2Units = 0;
  let slab3Units = 0;
  let slab4Units = 0;

  // Slab Charges
  let slab1Charge = 0;
  let slab2Charge = 0;
  let slab3Charge = 0;
  let slab4Charge = 0;

  // First 50 Units
  if (remainingUnits > 0) {
    slab1Units = Math.min(remainingUnits, 50);
    slab1Charge = slab1Units * 0.5;
    remainingUnits -= slab1Units;
  }

  // 51 - 200 Units
  if (remainingUnits > 0) {
    slab2Units = Math.min(remainingUnits, 150);
    slab2Charge = slab2Units * 0.75;
    remainingUnits -= slab2Units;
  }

  // 201 - 450 Units
  if (remainingUnits > 0) {
    slab3Units = Math.min(remainingUnits, 250);
    slab3Charge = slab3Units * 1.2;
    remainingUnits -= slab3Units;
  }

  // Above 450 Units
  if (remainingUnits > 0) {
    slab4Units = remainingUnits;
    slab4Charge = slab4Units * 1.5;
  }

  // Subtotal
  let subtotal = slab1Charge + slab2Charge + slab3Charge + slab4Charge;

  // 20% Surcharge
  let surcharge = subtotal * 0.2;

  // Grand Total
  let grandTotal = subtotal + surcharge;

  // Show Result Card
  document.getElementById("result").classList.remove("d-none");

  // Output
  document.getElementById("slab1").innerHTML =
    `First 50 Units: ${slab1Units} × ₹0.50 = ₹${slab1Charge.toFixed(2)}`;

  document.getElementById("slab2").innerHTML =
    `51 - 200 Units: ${slab2Units} × ₹0.75 = ₹${slab2Charge.toFixed(2)}`;

  document.getElementById("slab3").innerHTML =
    `201 - 450 Units: ${slab3Units} × ₹1.20 = ₹${slab3Charge.toFixed(2)}`;

  document.getElementById("slab4").innerHTML =
    `Above 450 Units: ${slab4Units} × ₹1.50 = ₹${slab4Charge.toFixed(2)}`;

  document.getElementById("subtotal").innerHTML =
    `Subtotal: ₹${subtotal.toFixed(2)}`;

  document.getElementById("surcharge").innerHTML =
    `20% Surcharge: ₹${surcharge.toFixed(2)}`;

  document.getElementById("grandTotal").innerHTML =
    `Grand Total: ₹${grandTotal.toFixed(2)}`;
});

// Reset Button
resetBtn.addEventListener("click", function () {
  document.getElementById("Units").value = "";

  document.getElementById("result").classList.add("d-none");
});
