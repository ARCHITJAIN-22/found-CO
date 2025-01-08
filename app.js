// GSAP Animations
gsap.from(".main-heading", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
gsap.from(".sub-heading", { duration: 1.5, y: 50, opacity: 0, ease: "power3.out" });
gsap.from(".action-buttons a", {
  duration: 1.2,
  y: 50,
  opacity: 0,
  stagger: 0.3,
  ease: "power3.out",
});

gsap.from(".feature-section", {
  scrollTrigger: {
    trigger: ".feature-section",
    start: "top 80%",
  },
  opacity: 0,
  x: -100,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out",
});

