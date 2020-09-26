const tl = gsap.timeline({defaults: {ease: "power1.out" }});

tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".before", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.75});
tl.fromTo("h3", { opacity: 0 }, { opacity: 1, duration: 0.75 }, "-=1");


