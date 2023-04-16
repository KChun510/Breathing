var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 50;
var fontSize = 20;
var words = ["Breath In", "Breath Out"];
var wordIndex = 0;
var expanding = true;
var speed = .25; // Change this to control the speed of expansion and contraction

setInterval(function() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#f8c444";
  ctx.fill();
  
  // Draw the text
  var text = words[wordIndex];
  ctx.font = fontSize + "px Arial";
  ctx.fillStyle = "black";
  var textWidth = ctx.measureText(text).width;
  ctx.fillText(text, centerX - textWidth / 2, centerY + fontSize / 2);
  
  // Expand or contract the circle
  if (expanding) {
    radius += speed;
    if (radius >= 225) {
      expanding = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    radius -= speed;
    if (radius <= 35) {
      expanding = true;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
}, 10);