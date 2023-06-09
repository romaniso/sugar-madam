import "../scss/style.scss";
import Scroll from "./ScrollTrigger";
import Carousel from "./Carousel";
import onLoad from "./Preloader";

//BURGER
const burger = document.querySelector("[data-burger]");
const menu = document.querySelector("[data-menu]");
burger.addEventListener("click", function () {
  this.classList.toggle("opened");
  menu.classList.toggle("opened");
});

//ACTION BUTTON
const action = document.querySelector("[data-action]");
action.addEventListener("click", () => {
  action.classList.toggle("active");
});

const scrollTrigger = new Scroll();
scrollTrigger.init();
const carousel = new Carousel();
carousel.init();
onLoad();
