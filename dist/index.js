var bubbles = document.getElementById("bubbles"),
  screenWidth = window.innerWidth,
  screenHeight = window.innerHeight,
  containerWidth = 100,
  marginWidth = (screenWidth - containerWidth - 100) / 2;
(totalCircles = 4000), (svgNS = "http://www.w3.org/2000/svg");

//Set viewBox for bubble container
bubbles.setAttributeNS(null, "viewbox", `0 0 ${screenWidth} ${screenHeight}`);

// For total number of circles, create circles
for (let k = 0; k < totalCircles; k++) {
  createCircle();
}

//Fill circle with color
function createCircle() {
  var circleXPos = getRandom(1, screenWidth);
  var circleYPos = getRandom(
    1,
    (1 / Math.log(circleXPos)) * 8000 - screenHeight * 0.1
  );
  var circleRadius = getRandom(4, 30);
  var circle = document.createElementNS(svgNS, "circle");

  var rectArea = screenWidth * screenHeight;
  // var ellipseArea = (screenWidth - 100) * (screenHeight - 100) * Math.PI;
  // var remainingArea = rectArea - ellipseArea / 4;

  console.log(rectArea);

  circle.setAttributeNS(null, "cx", circleXPos);
  circle.setAttributeNS(null, "cy", circleYPos);
  circle.setAttributeNS(null, "r", circleRadius);

  bubbles.appendChild(circle);
}

// Get Random Integer
function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

var colors = [
  "#a7c554",
  "#bb523d",
  "#cc7926",
  "#da21b1",
  "#4c528a",
  "#be1ea4",
  "#20079b",
  "#7490a7",
  "#770e31",
  "#a52a2a",
  "#663399",
  "#8b4513",
  "#ffc0cb",
  "#b0e0e6",
  "#d87093"
];

function fillColor(e) {
  e.setAttribute(
    "style",
    "fill:" + colors[Math.floor(Math.random() * colors.length)]
  );
}

function bubbleHover() {
  for (var e = document.querySelectorAll("circle"), t = 0; t < e.length; t++) {
    e[t].addEventListener("mouseover", function () {
      fillColor(this);
    });
  }
}

bubbleHover();


var bubbles = document.getElementById("bubblesRight"),
  screenWidth = window.innerWidth,
  screenHeight = window.innerHeight,
  containerWidth = 100,
  marginWidth = (screenWidth - containerWidth - 100) / 2;
(totalCircles = 4000), (svgNS = "http://www.w3.org/2000/svg");

//Set viewBox for bubble container
bubbles.setAttributeNS(null, "viewbox", `0 0 ${screenWidth} ${screenHeight}`);

// For total number of circles, create circles
for (let k = 0; k < totalCircles; k++) {
  createCircle();
}

//Fill circle with color
function createCircle() {
  var circleXPos = getRandom(1, screenWidth);
  var circleYPos = getRandom(
    1,
    (1 / Math.log(circleXPos)) * 8000 - screenHeight * 0.1
  );
  var circleRadius = getRandom(4, 30);
  var circle = document.createElementNS(svgNS, "circle");

  var rectArea = screenWidth * screenHeight;
  // var ellipseArea = (screenWidth - 100) * (screenHeight - 100) * Math.PI;
  // var remainingArea = rectArea - ellipseArea / 4;

  console.log(rectArea);

  circle.setAttributeNS(null, "cx", circleXPos);
  circle.setAttributeNS(null, "cy", circleYPos);
  circle.setAttributeNS(null, "r", circleRadius);

  bubbles.appendChild(circle);
}

// Get Random Integer
function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

var colors = [
  "#a7c554",
  "#bb523d",
  "#cc7926",
  "#da21b1",
  "#4c528a",
  "#be1ea4",
  "#20079b",
  "#7490a7",
  "#770e31",
  "#a52a2a",
  "#663399",
  "#8b4513",
  "#ffc0cb",
  "#b0e0e6",
  "#d87093"
];

function fillColor(e) {
  e.setAttribute(
    "style",
    "fill:" + colors[Math.floor(Math.random() * colors.length)]
  );
}

function bubbleHover() {
  for (var e = document.querySelectorAll("circle"), t = 0; t < e.length; t++) {
    e[t].addEventListener("mouseover", function () {
      fillColor(this);
    });
  }
}

bubbleHover();