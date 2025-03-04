document
  .getElementById("clear-history")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("history").innerHTML = "";
  });
