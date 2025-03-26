// ajouter une classe .sticky au header lors du scroll de la page
document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.getElementById("site-header").classList.add("sticky");
    } else {
      document.getElementById("site-header").classList.remove("sticky");
    }
  });
//  afficher la nav qu'on on appuie sur le bouton menu
const menuBtn = document.getElementById("menu-btn");
  menuBtn.addEventListener("click", () => {
    document.getElementById("site-nav").classList.toggle("active");
  });