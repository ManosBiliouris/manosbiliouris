// src/hooks/useAnimations.js
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useAnimations = () => {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      // 🖥 Desktop animations

      // BoxA1: Hero section
      gsap.from(".A1 img", {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out"
      });

      gsap.from(".A1 h1", {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(".blink", {
        opacity: 0.3,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Typing animation for subtitle
      gsap.to(".typewriter-text", {
        text: "Front-End Developer & UI/UX Designer.",
        duration: 2,
        delay: 0.6,
        ease: "none"
      });

      gsap.from(".content-A1-2 p", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.7,
        ease: "power2.out"
      });

      gsap.from(".content-A1-buttons a", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        delay: 1,
        duration: 0.8,
        ease: "power2.out"
      });

      // Looping float for icons in A1-info
      gsap.to(".A1-info-wrapper-first svg, .A1-info-wrapper-second svg", {
        y: -3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      });

      // Hover effect for social buttons
      gsap.utils.toArray(".content-A1-buttons a").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.3, ease: "power1.inOut" });
        });
      });

      // BoxB1: Stash icons
      gsap.from(".B1-knowledge a", {
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out"
      });

      // BoxB2: Counters pop
      gsap.from(".B2 .sub-box", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        immediateRender: false
      });

      // BoxB3: Contact section
      gsap.from(".content-B3 h1, .content-B3 h2", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });

      // BoxC1: Projects pop in
      gsap.from(".C1 .project", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // BoxC2: Why Me paragraph fade
      gsap.from(".C2 p", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      // BoxA2: Services
      gsap.from(".content-A2 p", {
        opacity: 0,
        x: -30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      // BoxA3: What Else
      gsap.from(".content-A3 p", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      // BoxC3: Reviews
      gsap.from(".tea-container", {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out"
      });
    });

    mm.add("(max-width: 1024px)", () => {
      // 📱 Mobile: First box animates immediately, others on scroll
      const boxes = gsap.utils.toArray(".box");

      if (boxes.length > 0) {
        // Animate first box on load
        gsap.from(boxes[0], {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out"
        });

        // Animate remaining boxes on scroll
        boxes.slice(1).forEach((box) => {
          gsap.from(box, {
            scrollTrigger: {
              trigger: box,
              start: "top bottom",
              once: true,
              invalidateOnRefresh: true
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
            immediateRender: false
          });
        });
      }

      gsap.utils.toArray(".content-A1-buttons a").forEach((el) => {
        el.addEventListener("touchstart", () => {
          gsap.to(el, { scale: 1.05, duration: 0.2 });
        });
        el.addEventListener("touchend", () => {
          gsap.to(el, { scale: 1, duration: 0.2 });
        });
      });
    });

    return () => mm.revert();
  }, []);
};

export default useAnimations;