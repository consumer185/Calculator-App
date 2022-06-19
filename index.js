var displayText = $("#displayText").html();
var firstNumberEntered = false;
var firstNumber = "";
var operation = "";
var calculation = "";
var currentTheme = 1;

// var range = $('.input-range');
//
// range.on('input', function() {
//   if (document.getElementById("input-range").value === 1) {
//     console.log("we're on theme 1 people!");
//   }
//   console.log("range clicked on! now set to " + document.getElementById("input-range").value);
//
// });

// $(".reset").click(function() {
//   if ($("#input-range").val() === 2) {
//     alert("we're on theme 1 people!");
//   } else {console.log("nothing doing");
// }
// });


document.getElementById("input-range").oninput = function() {

  if ($("#input-range").val() === "1") {
    console.log("we're on theme 1 people!");

    $(".masterDiv").removeClass("masterDiv-theme2");
    $(".masterDiv").removeClass("masterDiv-theme3");
    $(".masterDiv").addClass("masterDiv-theme1");

    $("h3").removeClass("text-theme2");
    $("h3").removeClass("text-theme3");
    $("h3").addClass("text-theme1");

    $("h2").removeClass("text-theme2");
    $("h2").removeClass("text-theme3");
    $("h2").addClass("text-theme1");

    $("label").removeClass("text-theme2");
    $("label").removeClass("text-theme3");
    $("label").addClass("text-theme1");

    $("span").removeClass("text-theme2");
    $("span").removeClass("text-theme3");
    $("span").addClass("text-theme1");

    $("#input-range").removeClass("input-range-theme2");
    $("#input-range").removeClass("input-range-theme3");
    $("#input-range").addClass("input-range-theme1");

    $("#displayDiv").removeClass("displayDiv-theme2");
    $("#displayDiv").removeClass("displayDiv-theme3");
    $("#displayDiv").addClass("displayDiv-theme1");

    $("#inputDiv").removeClass("inputDiv-theme2");
    $("#inputDiv").removeClass("inputDiv-theme3");
    $("#inputDiv").addClass("inputDiv-theme1");

    $(".numeric").removeClass("button-theme2");
    $(".numeric").removeClass("button-theme3");
    $(".numeric").addClass("button-theme1");

    $(".delete").removeClass("delete-theme2");
    $(".delete").removeClass("delete-theme3");
    $(".delete").addClass("delete-theme1");

    $(".reset").removeClass("reset-theme2");
    $(".reset").removeClass("reset-theme3");
    $(".reset").addClass("reset-theme1");

    $(".equals").removeClass("equals-theme2");
    $(".equals").removeClass("equals-theme3");
    $(".equals").addClass("equals-theme1");

    $(".thumb").removeClass("thumb-theme2");
    $(".thumb").removeClass("thumb-theme3");
    $(".thumb").addClass("thumb-theme1");

    $(".operation").removeClass("button-theme2");
    $(".operation").removeClass("button-theme3");
    $(".operation").addClass("button-theme1");



  }

  if ($("#input-range").val() === "2") {
    console.log("boom, theme 2!");
    $(".masterDiv").removeClass("masterDiv-theme1");
    $(".masterDiv").removeClass("masterDiv-theme3");
    $(".masterDiv").addClass("masterDiv-theme2");

    $("h3").removeClass("text-theme1");
    $("h3").removeClass("text-theme3");
    $("h3").addClass("text-theme2");

    $("h2").removeClass("text-theme1");
    $("h2").removeClass("text-theme3");
    $("h2").addClass("text-theme2");

    $("label").removeClass("text-theme1");
    $("label").removeClass("text-theme3");
    $("label").addClass("text-theme2");

    $("span").removeClass("text-theme1");
    $("span").removeClass("text-theme3");
    $("span").addClass("text-theme2");

    $("#input-range").removeClass("input-range-theme1");
    $("#input-range").removeClass("input-range-theme3");
    $("#input-range").addClass("input-range-theme2");

    $("#displayDiv").removeClass("displayDiv-theme1");
    $("#displayDiv").removeClass("displayDiv-theme3");
    $("#displayDiv").addClass("displayDiv-theme2");

    $("#inputDiv").removeClass("inputDiv-theme1");
    $("#inputDiv").removeClass("inputDiv-theme3");
    $("#inputDiv").addClass("inputDiv-theme2");

    $(".numeric").removeClass("button-theme1");
    $(".numeric").removeClass("button-theme3");
    $(".numeric").addClass("button-theme2");

    $(".delete").removeClass("delete-theme1");
    $(".delete").removeClass("delete-theme3");
    $(".delete").addClass("delete-theme2");

    $(".reset").removeClass("reset-theme1");
    $(".reset").removeClass("reset-theme3");
    $(".reset").addClass("reset-theme2");

    $(".equals").removeClass("equals-theme1");
    $(".equals").removeClass("equals-theme3");
    $(".equals").addClass("equals-theme2");

    $(".thumb").removeClass("thumb-theme1");
    $(".thumb").removeClass("thumb-theme3");
    $(".thumb").addClass("thumb-theme2");

    $(".operation").removeClass("button-theme1");
    $(".operation").removeClass("button-theme3");
    $(".operation").addClass("button-theme2");


  }


  if ($("#input-range").val() === "3") {
    console.log("theme 3, hell yeah!");


    $(".masterDiv").removeClass("masterDiv-theme1");
    $(".masterDiv").removeClass("masterDiv-theme2");
    $(".masterDiv").addClass("masterDiv-theme3");


    $("h3").removeClass("text-theme2");
    $("h3").removeClass("text-theme1");
    $("h3").addClass("text-theme3");

    $("h2").removeClass("text-theme2");
    $("h2").removeClass("text-theme1");
    $("h2").addClass("text-theme3");

    $("label").removeClass("text-theme2");
    $("label").removeClass("text-theme1");
    $("label").addClass("text-theme3");

    $("span").removeClass("text-theme2");
    $("span").removeClass("text-theme1");
    $("span").addClass("text-theme3");

    $("#input-range").removeClass("input-range-theme2");
    $("#input-range").removeClass("input-range-theme1");
    $("#input-range").addClass("input-range-theme3");

    $("#displayDiv").removeClass("displayDiv-theme2");
    $("#displayDiv").removeClass("displayDiv-theme1");
    $("#displayDiv").addClass("displayDiv-theme3");

    $("#inputDiv").removeClass("inputDiv-theme2");
    $("#inputDiv").removeClass("inputDiv-theme1");
    $("#inputDiv").addClass("inputDiv-theme3");

    $(".numeric").removeClass("button-theme2");
    $(".numeric").removeClass("button-theme1");
    $(".numeric").addClass("button-theme3");

    $(".delete").removeClass("delete-theme2");
    $(".delete").removeClass("delete-theme1");
    $(".delete").addClass("delete-theme3");

    $(".reset").removeClass("reset-theme2");
    $(".reset").removeClass("reset-theme1");
    $(".reset").addClass("reset-theme3");

    $(".equals").removeClass("equals-theme2");
    $(".equals").removeClass("equals-theme1");
    $(".equals").addClass("equals-theme3");

    $(".thumb").removeClass("thumb-theme2");
    $(".thumb").removeClass("thumb-theme1");
    $(".thumb").addClass("thumb-theme3");

    $(".operation").removeClass("button-theme2");
    $(".operation").removeClass("button-theme1");
    $(".operation").addClass("button-theme3");


  }

};









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
