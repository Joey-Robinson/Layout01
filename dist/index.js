const openSlide = document
  .getElementById("openSlideMenu")
  .addEventListener("click", () => {
    const slide = document.getElementById("slide");
    slide.style.width = "35vw";
  });

// const svgPath = document.getElementById('svg').addEventListener('click', () => {
//   const path = document.querySelectorAll('.path');
//   path.forEach((path) => {
//     path.classList.toggle('abc');
//   })
// });

const closeSlide = document
  .getElementById("closeSlideMenu")
  .addEventListener("click", () => {
    const slide = document.getElementById("slide");
    slide.style.width = "0";
  });

const bubbles = document.getElementById("bubbles"),
  screenWidth = window.innerWidth,
  screenHeight = window.innerHeight,
  containerWidth = 100,
  marginWidth = (screenWidth - containerWidth - 100) / 2;
(totalCircles = 4000), (svgNS = "http://www.w3.org/2000/svg");

const createCircle = () => {
  const circleXPos = getRandom(1, screenWidth);
  const circleYPos = getRandom(
    1,
    (1 / Math.log(circleXPos)) * 8000 - screenHeight * 0.1
  );
  const circleRadius = getRandom(4, 30);
  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttributeNS(null, "cx", circleXPos);
  circle.setAttributeNS(null, "cy", circleYPos);
  circle.setAttributeNS(null, "r", circleRadius);
  bubbles.appendChild(circle);
};

const fillColor = event => {
  event.setAttribute(
    "style",
    `fill: ${colors[Math.floor(Math.random() * colors.length)]}`
  );
};

const getRandom = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

function bubbleHover() {
  for (var e = document.querySelectorAll("circle"), t = 0; t < e.length; t++) {
    e[t].addEventListener("mouseover", function() {
      fillColor(this);
    });
  }
}

bubbles.setAttributeNS(null, "viewbox", `0 0 ${screenWidth} ${screenHeight}`);

for (let k = 0; k < totalCircles; k++) {
  createCircle();
}

const colors = [
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

bubbleHover();
