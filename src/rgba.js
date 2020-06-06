const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function() {
  setRandomRgbaColourBackground();
});

function getRandomRgbaColour() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let a = ((Math.random() * (100 - 10 + 1) + 10) * 0.01).toFixed(2);
  if (a >= 1) {
    a = 1;
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

function setRandomRgbaColourBackground() {
  const rgbaColour = getRandomRgbaColour();
  document.body.style.backgroundColor = rgbaColour;
  colour.textContent = rgbaColour;
  // colour.style.color = rgbaColour;
}

// module.exports = { btn, colour, getRandomRgbaColour, r, g, b, a, setRandomRgbaColourBackground };
