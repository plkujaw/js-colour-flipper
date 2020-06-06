const colours = ["#be5046", "#98c379", "#e5c07b", "#61afef", "#c578dd", "#56b5c2"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour")
btn.addEventListener("click", function() {
  setRandomBackground();
});

function getRandomNumber() {
  // get random number between 0 and colours array length
  return Math.floor(Math.random() * colours.length);
}

function setRandomBackground() {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colours[randomNumber];
  colour.textContent = colours[randomNumber];
  colour.style.color = colours[randomNumber];
}
