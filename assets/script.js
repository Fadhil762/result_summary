const data = [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg"
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg"
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg"
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg"
    }
];

// Get the container element
const summaryContainer = document.getElementById("summary-container");

// Generate summary items
data.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("summary-item");
  div.innerHTML = `
    <div>
      <img src="${item.icon}" alt="${item.category} Icon">
      <span>${item.category}</span>
    </div>
    <span>${item.score} / 100</span>
  `;
  summaryContainer.appendChild(div);
});