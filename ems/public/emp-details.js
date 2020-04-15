// document.getElementById("emp-name").addEventListener("click", function () {
//   document.getElementById("emp-details").style.display = "block";
// });

function displayDetails() {
  document.getElementById("emp-details").style.display = "block";
}

var showDetails = document.getElementById("emp-name");

if (showDetails) {
  showDetails.addEventListener("click");
}

