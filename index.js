var displayText = $("#displayText").html();
var firstNumberEntered = false;
var firstNumber = "";
var operation = "";
var calculation = "";

$(".numeric").click(function() {

  if (firstNumberEntered === false) {


    if ($("#displayText").html() === "0") {
      $("#displayText").html("");
      $("#displayText").append(this.innerHTML);
    } else {
      $("#displayText").append(this.innerHTML);
    }
  }

  if (firstNumberEntered === true) {
    $("#displayText").html("");
    $("#displayText").append(this.innerHTML);
  }
});

$(".decimalPoint").click(function() {
  if (document.getElementById("displayText").innerHTML.includes(".")) {} else {
    $("#displayText").append(this.innerHTML);
  }
});

$(".reset").click(function() {
  $("#displayText").html("0");
  var firstNumberEntered = false;
  var firstNumber = "";
  var operation = "";
  var calculation = "";
});

$(".delete").click(function() {
  if (document.getElementById("displayText").innerHTML.length > 1) {
    document.getElementById("displayText").innerHTML = document.getElementById("displayText").innerHTML.slice(0, -1);
  } else {
    $("#displayText").html("0");
  }
});


$(".operation").click(function() {
  firstNumber = document.getElementById("displayText").innerHTML;
  operation = this.innerHTML;
  console.log(firstNumber + operation);
  firstNumberEntered = true;
});


$(".equals").click(function() {
  var secondNumber = document.getElementById("displayText").innerHTML;

  if (operation === "/") {
    calculation = firstNumber / secondNumber;
  }

  if (operation === "x") {
    calculation = firstNumber * secondNumber;
  }

  if (operation === "+") {
    var intfirstNumber = parseInt(firstNumber);
    var intsecondNumber = parseInt(secondNumber);
    calculation = intfirstNumber + intsecondNumber;
  }

  if (operation === "-") {
    calculation = firstNumber - secondNumber;
  }




  document.getElementById("displayText").innerHTML = calculation;
});
