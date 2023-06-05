const keys = ["A", "S", "D", "F", "J", "K", "L", ";","Q", "W", "E", 
"R", "T", "Y", "U","I", "I", "O", "P", "Z", "X", "C","V", "B", "N", 
"M", ",", "1", "2","3", "4", "5", "6", "7", "8", "9","0"]; // The Letter keys and digit to practice
let currentKey; // Variable to store the current key to be typed
let startTime; // Variable to store the start time for calculating speed
let correctCount = 0; // Variable to count the number of correct keystrokes
let totalCount = 0; // Variable to count the total number of keystrokes

// Function to randomly select a key from the array and display it
function displayRandomKey() {
  const randomIndex = Math.floor(Math.random() * keys.length);
  currentKey = keys[randomIndex];
  document.getElementById("key-to-type").textContent = currentKey;
}

// Function to handle user input
function handleInput(event) {
  const userInput = event.target.value.toUpperCase();
  totalCount++;

  if (userInput === currentKey) {
    correctCount++;
    event.target.value = "";
    displayRandomKey();
  }

  const accuracy = (correctCount / totalCount) * 100;
  document.getElementById("accuracy").textContent = `${accuracy.toFixed(0)}%`;
}

// Event listener for user input
document.getElementById("user-input").addEventListener("input", handleInput);

// Event listener for page load
window.addEventListener("load", () => {
  displayRandomKey();
  startTime = new Date().getTime();
});

// Event listener for keydown events
document.addEventListener("keydown", (event) => {
  const userInput = event.key.toUpperCase();
  totalCount++;

  if (userInput === currentKey) {
    correctCount++;
    displayRandomKey();
  }

  const accuracy = (correctCount / totalCount) * 100;
  document.getElementById("accuracy").textContent = `${accuracy.toFixed(0)}%`;
});

// Function to calculate and display typing speed
function calculateSpeed() {
  const currentTime = new Date().getTime();
  const timeInMinutes = (currentTime - startTime) / 60000;
  const wordsPerMinute = Math.floor(correctCount / timeInMinutes);
  document.getElementById("speed").textContent = `${wordsPerMinute} WPM`;
}

// Event listener for window unload
window.addEventListener("beforeunload", calculateSpeed);
