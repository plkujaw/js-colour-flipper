const r = Math.floor(Math.random() * 255);
console.log('r', r);
const g = Math.floor(Math.random() * 255);
console.log('g', g);
const b = Math.floor(Math.random() * 255);
console.log('b', b);
const a = ((Math.random() * (100 - 50 + 1) + 50) * 0.01).toFixed(2);
console.log('a', a);

const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");
