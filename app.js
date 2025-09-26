// Get references to elements
const coinForm = document.getElementById("coinForm");
const coinList = document.getElementById("coinList");

// Load existing coins from localStorage
let coins = JSON.parse(localStorage.getItem("coins")) || [];

// Function to display coins
function displayCoins() {
  coinList.innerHTML = "";
  coins.forEach((coin, index) => {
    const li = document.createElement("li");
    li.textContent = `${coin.type} - ${coin.year} (${coin.condition})`;
    
    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
      coins.splice(index, 1);
      localStorage.setItem("coins", JSON.stringify(coins));
      displayCoins();
    });

    li.appendChild(deleteBtn);
    coinList.appendChild(li);
  });
}

// Handle form submission
coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.getElementById("coinType").value;
  const year = document.getElementById("coinYear").value;
  const condition = document.getElementById("coinCondition").value;

  coins.push({ type, year, condition });
  localStorage.setItem("coins", JSON.stringify(coins));
  
  coinForm.reset();
  displayCoins();
});

// Display coins on page load
displayCoins();
