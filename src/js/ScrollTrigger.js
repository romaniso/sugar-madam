import { gsap } from "gsap";

export default class Scroll {
  init() {
    gsap.registerPlugin(ScrollTrigger);
    const servicesSection = document.getElementById("services");
    const pricesSection = document.getElementById("prices");
    const gallerySection = document.getElementById("gallery");
    const contactSection = document.getElementById("contact");

    gsap.fromTo(
      servicesSection.children,
      { y: "+=100" },
      {
        y: 0,
        stagger: 0.2,
        duration: 2,
        ease: "easeInOut",
        scrollTrigger: { trigger: "#services", start: "top 80%", scrub: 1 },
      }
    );
    gsap.fromTo(
      pricesSection.querySelector(".prices__body"),
      { x: "-=100", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 2,
        ease: "easeInOut",
        scrollTrigger: { trigger: "#prices", start: "top 60%" },
      }
    );
    gsap.fromTo(
      gallerySection.querySelector(".carousel"),
      { y: 0, opacity: 0.4 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 3,
        ease: "easeInOut",
        scrollTrigger: { trigger: "#gallery", start: "top 120%", scrub: 1 },
      }
    );
    gsap.fromTo(
      contactSection.querySelector(".info-contact"),
      { x: "-=50" },
      {
        x: 0,
        stagger: 0.2,
        duration: 3,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 150%",
          // scrub: 1,
        },
      }
    );
    gsap.fromTo(
      contactSection.querySelector(".map-contact"),
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 3,
        ease: "easeInOut",
        scrollTrigger: { trigger: "#contact", start: "top 100%", scrub: 1 },
      }
    );
    gsap.fromTo(
      document.querySelector(".action"),
      { opacity: 1 },
      {
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 140%",
          scrub: 1,
        },
      }
    );
  }
}
