import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.05, // inertia
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
