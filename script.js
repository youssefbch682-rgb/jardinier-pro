// =====================
// CURSOR CUSTOM
// =====================
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gsap.set(cursor, { x: mouseX, y: mouseY });
}, { passive: true });

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  gsap.set(follower, { x: followerX, y: followerY });
  requestAnimationFrame(animateFollower);
}
animateFollower();

document.querySelectorAll("a, button, .service-item, .real-img").forEach(el => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 2.5, background: "var(--vert-mousse)", duration: 0.25, overwrite: true });
    gsap.to(follower, { scale: 1.5, opacity: 0.3, duration: 0.25, overwrite: true });
  }, { passive: true });
  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, { scale: 1, background: "var(--terre)", duration: 0.25, overwrite: true });
    gsap.to(follower, { scale: 1, opacity: 0.7, duration: 0.25, overwrite: true });
  }, { passive: true });
});

// =====================
// PAGE INTRO
// =====================
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.to(".overlay-inner", { scaleY: 0, duration: 1, ease: "power4.inOut", delay: 0.1 })
  .from(".hero-tag", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
  .from(".hero-title .line", { opacity: 0, y: 50, duration: 0.7, stagger: 0.08 }, "-=0.4")
  .from(".hero-bottom", { opacity: 0, y: 25, duration: 0.6 }, "-=0.3")
  .from(".hero-image-inner", { opacity: 0, scale: 1.06, duration: 1, ease: "power3.out" }, "-=0.7")
  .from(".hero-badge", { opacity: 0, x: -20, duration: 0.5 }, "-=0.3")
  .from(".hero-scroll-hint", { opacity: 0, duration: 0.4 }, "-=0.2");

// =====================
// NAV SCROLL
// =====================
ScrollTrigger.create({
  start: "top -60px",
  onEnter: () => document.querySelector("nav").classList.add("scrolled"),
  onLeaveBack: () => document.querySelector("nav").classList.remove("scrolled"),
});

// =====================
// MARQUEE pause on hover
// =====================
const marquee = document.querySelector(".marquee-track");
if (marquee) {
  marquee.addEventListener("mouseenter", () => marquee.style.animationPlayState = "paused", { passive: true });
  marquee.addEventListener("mouseleave", () => marquee.style.animationPlayState = "running", { passive: true });
}

// =====================
// SERVICES
// =====================
gsap.from(".service-item", {
  scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
  opacity: 0, x: -30, duration: 0.6, stagger: 0.1, ease: "power3.out"
});

// =====================
// STATS — compteur
// =====================
document.querySelectorAll(".stat-num").forEach(el => {
  const target = parseInt(el.getAttribute("data-target"));
  ScrollTrigger.create({
    trigger: el, start: "top 85%", once: true,
    onEnter: () => {
      gsap.to({ val: 0 }, {
        val: target, duration: 1.5, ease: "power2.out",
        onUpdate: function() { el.textContent = Math.round(this.targets()[0].val); }
      });
    }
  });
});

gsap.from(".stat-item", {
  scrollTrigger: { trigger: ".stats", start: "top 80%" },
  opacity: 0, y: 30, duration: 0.6, stagger: 0.08, ease: "power3.out"
});

// =====================
// TITRES
// =====================
gsap.utils.toArray("h2").forEach(h2 => {
  gsap.from(h2, {
    scrollTrigger: { trigger: h2, start: "top 85%" },
    opacity: 0, y: 30, duration: 0.7, ease: "power3.out"
  });
});

// =====================
// RÉALISATIONS
// =====================
gsap.from(".real-item", {
  scrollTrigger: { trigger: ".real-grid", start: "top 78%" },
  opacity: 0, y: 40, duration: 0.7, stagger: 0.12, ease: "power3.out"
});

// =====================
// TÉMOIGNAGE
// =====================
gsap.from(".temo-quote", {
  scrollTrigger: { trigger: ".temoignage", start: "top 80%" },
  opacity: 0, scale: 0.85, duration: 0.7, ease: "back.out(1.5)"
});
gsap.from("blockquote p", {
  scrollTrigger: { trigger: "blockquote", start: "top 80%" },
  opacity: 0, y: 25, duration: 0.8, ease: "power3.out"
});

// =====================
// CONTACT
// =====================
gsap.from(".contact-left", {
  scrollTrigger: { trigger: ".contact", start: "top 80%" },
  opacity: 0, x: -40, duration: 0.8, ease: "power3.out"
});
gsap.from(".contact-form", {
  scrollTrigger: { trigger: ".contact", start: "top 80%" },
  opacity: 0, x: 40, duration: 0.8, ease: "power3.out"
});

// =====================
// PARALLAX hero
// =====================
gsap.to(".hero-img", {
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 2 },
  y: 60, ease: "none"
});

// =====================
// FORMULAIRE
// =====================
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  btn.querySelector("span").textContent = "Message envoyé ✓";
  btn.style.background = "#3d6b4f";
  btn.disabled = true;
  setTimeout(() => e.target.reset(), 500);
}
