var fahrenheitForm = document.querySelector(".fahenheitForm");

fahrenheitForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var celcius = parseFloat(fahrenheitForm.querySelector("#celcius").value.trim());
  var formula = (celcius * 9 / 5) + 32;
  var fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.value = parseFloat(formula);

  if (isNaN(celcius)) {
    alert("Raqam kiriting");
    fahrenheit.classList.remove("bg-primary", "bg-danger");
    return;
  }

  if (formula >= 80) {
    fahrenheit.classList.remove("bg-primary");
    fahrenheit.classList.add("bg-danger");
  } else if (formula < 80) {
    fahrenheit.classList.remove("bg-danger");
    fahrenheit.classList.add("bg-primary");
  }
})


