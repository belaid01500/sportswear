let Option = {
  method: "GET",
};
fetch("./donneesProduits/baskets.json", Option)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    myContainCard(data);
  });

function myContainCard(donnees) {
  let basket = document.querySelector("#basket");
  donnees.forEach((donnee) => {
    basket.innerHTML += `
    <div class="card-basket">
    <img src="./imagesProduits/${donnee.photo}" alt="photo d'une chaussure">
    <div class="titre-basket justify-between align-center">
      <h4>${donnee.nom}</h4>
      <p><span>${donnee.prix}€</span></p>
    </div>
    <p class="des-basket margin-top">
      ${donnee.description}
    </p>
  </div>`;
  });
}

let map = L.map("map").setView([45.439695, 4.3871779], 13);
L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}",
  {
    minZoom: 0,
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: "png",
  }
).addTo(map);

L.marker([45.439695, 4.3871779]).addTo(map).openPopup();

let burger = document.querySelector(".icon");
let headerNav = document.querySelector(".header-nav");
let closeBurger = document.querySelector(".close-burger");

headerNav.addEventListener("click", () => {
  openMenuBurger();
  closeMenuBurger();
});

burger.addEventListener("click", () => {
  console.log(burger);
  openMenuBurger();
});

closeBurger.addEventListener("click", () => {
  console.log(closeBurger);
  closeMenuBurger();
});

function openMenuBurger() {
  headerNav.classList.add("open");
}

function closeMenuBurger() {
  headerNav.classList.remove("open");
}
