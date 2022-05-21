var displayText = $("#displayText").html();


$(".numeric").click(function() {
  if ($("#displayText").html() === "0") {
    $("#displayText").html("");
    $("#displayText").append(this.innerHTML);
  } else {
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
});

$(".delete").click(function() {

  if (document.getElementById("displayText").innerHTML.length > 1) {
    document.getElementById("displayText").innerHTML = document.getElementById("displayText").innerHTML.slice(0, -1);
  } else {
    $("#displayText").html("0");
  }

});
