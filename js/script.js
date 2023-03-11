const carousel = document.querySelector("[data-carousel]");
const firstImg = carousel.querySelectorAll("[data-carousel] img")[0];
const arrows = document.querySelectorAll("[data-arrow]");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const changeArrowVisiblity = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

  if (carousel.scrollLeft === 0) {
    arrows[0].classList.add("disabled");
  } else if (Math.round(carousel.scrollLeft) === scrollWidth) {
    arrows[1].classList.add("disabled");
  } else {
    arrows[1].classList.remove("disabled");
    arrows[0].classList.remove("disabled");
  }
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // first image width + left margin + border from styles
    carousel.scrollLeft += arrow.id === "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => changeArrowVisiblity(), 60);
  });
});

const autoSlide = () => {
  if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth)
    return;
  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 12;
  let valDifference = firstImgWidth - positionDiff;
  if (carousel.scrollLeft > prevScrollLeft) {
    //user is scrolling right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  //user is scrolling left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  //update global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const onDrag = (e) => {
  //scroll images to the left according to the mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff - 1;
  changeArrowVisiblity();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", onDrag);
carousel.addEventListener("touchmove", onDrag);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
