const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

  btn.addEventListener("click", function() {
    setRandomHexColourBackground();
  });


function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function getRandomHexColour() {
  let hexColour = "#";
  for (let i = 0; i < 6; i++) {
    hexColour += hex[getRandomNumber()]
  }
  return hexColour;
}

function setRandomHexColourBackground() {
  const hexColour = getRandomHexColour();
  document.body.style.backgroundColor = hexColour;
  colour.textContent = hexColour;
  // colour.style.color = hexColour;
}

// module.exports = { hex, btn, colour, getRandomNumber, getRandomHexColour, setRandomHexColourBackground };
