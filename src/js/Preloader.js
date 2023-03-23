const preloadFunction = () => {
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 1000);
  });
};

export default preloadFunction;
