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

