const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

// Ouvrir/fermer le menu en cliquant sur le bouton burger
burgerBtn.addEventListener("click", function () {
  menu.classList.remove("hidden");
  setTimeout(() => {
    menu.classList.add("menu--open");
    menu.setAttribute("aria-hidden", "false");
  }, 10);
  console.log("menu open");
});

// Fermer le menu en cliquant sur le bouton de fermeture
closeBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
  menu.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    menu.classList.add("hidden");
  }, 300);
});

//fonction pour surveiller la taille d'écran et ajouter la classe .hidden si celle ci dépasse 751px;
const mediaQuery = window.matchMedia("(min-width: 751px)");
mediaQuery.addEventListener("change", handleResize);

function handleResize(e) {
  if (e.matches) {
    menu.classList.remove("hidden");
    menu.classList.remove("menu--open");
    menu.setAttribute("aria-hidden", "false");
  } else {
    menu.classList.add("hidden");
  }
}

handleResize(mediaQuery);
