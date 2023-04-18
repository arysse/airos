document.addEventListener("mousemove", function(event) {
  var circle = document.getElementById("circle");
  var x = event.clientX;
  var y = event.clientY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
});

