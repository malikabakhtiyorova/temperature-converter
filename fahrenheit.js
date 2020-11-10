var fahrenheitForm = document.querySelector(".fahenheitForm");

fahrenheitForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var celcius = parseFloat(fahrenheitForm.querySelector("#celcius").value.trim());
  var formula = (celcius * 9 / 5) + 32;
  var fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.value = parseFloat(formula);



  if (formula >= 80) {
    fahrenheit.classList.remove("bg-primary", "bg-danger");
    fahrenheit.classList.add("bg-danger");
  } else if (formula < 80) {
    fahrenheit.classList.remove("bg-danger", "bg-danger");
    fahrenheit.classList.add("bg-primary");
  }
})


var gameForm = document.querySelector(".gameForm");

gameForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var number = parseInt(gameForm.querySelector("#number").value.trim(), 10)
  var result = gameForm.querySelector("#result");
  // var fizzBuzz = fizzBuzz.textContent = "fizzbuzz";
  // var buzz = buzz.textContent = "buzz";
  // var fizz = fizz.textContent = "fizz";
  var fizz = "Fizz";
  var buzz = "Buzz";
  var fizzBuzz = fizz + buzz;

  if (number % 5 === 0 && number % 3 === 0) {
    result.textContent = fizzBuzz;

  } else if (number % 5 === 0) {
    result.textContent = fizz;
    console.log("Fizz");
  } else if (number % 3 === 0) {
    result.textContent = buzz;
    console.log("Buzz");
  } else {
    result.textContent = number;
    console.log(number);
  }
})