const navbar = document.querySelector('nav');

// Changer la classe active sur l'élément cliqué
const setActiveElement = (elem) => {
  document.querySelector('nav a.active').classList.remove('active');

  elem.classList.add('active');
}

// Commencer la transition de vue lors du clic sur un élément de la navbar
navbar.addEventListener('click', async  function (event) {

  if (!event.target.matches('nav a:not(.active)')) {
    return;
  }
  
  // Fallback for browsers that don't support View Transitions:
  if (!document.startViewTransition) {
    setActiveElement(event.target);
    return;
  }
  
  document.startViewTransition(() => setActiveElement(event.target));
});

// Compteur
// Initialize the counter variable
let count = 0;

// Select the button and the display elements from the DOM
const clickButton = document.getElementById("clickButton");
const countDisplay = document.getElementById("countDisplay");

// Add a click event listener to the button
clickButton.addEventListener("click",  async  function (event) {
    // Increment the count variable
    count++;

    // Update the text content of the display element
    countDisplay.textContent = count;
});
