// Theme Toggle
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Modal Logic
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Dynamic Card Creation
const addCardBtn = document.getElementById("addCard");
const cardContainer = document.getElementById("cardContainer");
let cardCount = 1;

addCardBtn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "demo-card";
  card.innerHTML = `
    <h3>Card #${cardCount++}</h3>
    <p>This card was dynamically generated using JavaScript.</p>
    <button onclick="alert('Card #${cardCount - 1} clicked')">Click</button>
  `;
  cardContainer.appendChild(card);
});
