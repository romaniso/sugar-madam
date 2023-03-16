import "../scss/style.scss";
import Scroll from "./ScrollTrigger";
import Carousel from "./Carousel";

//ACTION BUTTON
const action = document.querySelector("[data-action]");
action.addEventListener("click", () => {
  action.classList.toggle("active");
});

const scrollTrigger = new Scroll();
scrollTrigger.init();
const carousel = new Carousel();
carousel.init();
