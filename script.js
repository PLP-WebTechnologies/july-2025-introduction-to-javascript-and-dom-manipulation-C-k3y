// Part 1: JavaScript Basics
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You're an adult.");
  document.getElementById("result").textContent = "Welcome, adult!";
} else {
  console.log("You're a minor.");
  document.getElementById("result").textContent = "Sorry, you're too young.";
}

// Part 2: Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatGreeting(name) {
  return `Hello, ${name}!`;
}

let total = calculateTotal(150, 2);
console.log("Total:", total);
document.getElementById("greeting").textContent = formatGreeting("Kelsey");

// Part 3: Loops
const colors = ["red", "green", "blue"];
colors.forEach((color) => {
  let li = document.createElement("li");
  li.textContent = color;
  document.getElementById("colorList").appendChild(li);
});

for (let i = 5; i >= 0; i--) {
  setTimeout(() => {
    document.getElementById("countdown").textContent = `Countdown: ${i}`;
  }, (5 - i) * 1000);
}

// Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("changeText").textContent = "Text updated via JS!";

const newItem = document.createElement("li");
newItem.textContent = "New List Item";
document.getElementById("dynamicList").appendChild(newItem);
