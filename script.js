// =====================
// LENIS — Smooth Scroll
// =====================
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sync GSAP ScrollTrigger avec Lenis
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// =====================
// GSAP — Hero animation
// =====================
gsap.from('.eyebrow', {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 0.2,
  ease: 'power3.out'
});

gsap.from('h1', {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.4,
  ease: 'power3.out'
});

gsap.from('.hero-sub', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.7,
  ease: 'power3.out'
});

gsap.from('.btn', {
  opacity: 0,
  y: 20,
  duration: 0.7,
  delay: 0.9,
  ease: 'power3.out'
});

gsap.from('.hero-img', {
  opacity: 0,
  scale: 1.05,
  duration: 1.2,
  delay: 0.3,
  ease: 'power3.out'
});

// =====================
// SCROLL — Nav shrink
// =====================
ScrollTrigger.create({
  start: 'top -80px',
  onEnter: () => document.querySelector('nav').classList.add('scrolled'),
  onLeaveBack: () => document.querySelector('nav').classList.remove('scrolled'),
});

// =====================
// SCROLL — Cards services
// =====================
gsap.from('.card', {
  scrollTrigger: {
    trigger: '.cards',
    start: 'top 80%',
  },
  opacity: 0,
  y: 50,
  duration: 0.7,
  stagger: 0.15,
  ease: 'power3.out'
});

// =====================
// SCROLL — Titre sections
// =====================
gsap.utils.toArray('h2').forEach(h2 => {
  gsap.from(h2, {
    scrollTrigger: {
      trigger: h2,
      start: 'top 85%',
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: 'power3.out'
  });
});

// =====================
// SCROLL — Galerie
// =====================
gsap.from('.gallery-item', {
  scrollTrigger: {
    trigger: '.gallery',
    start: 'top 75%',
  },
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out'
});

// =====================
// SCROLL — Témoignage parallax
// =====================
gsap.from('blockquote p', {
  scrollTrigger: {
    trigger: 'blockquote',
    start: 'top 80%',
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: 'power3.out'
});

// =====================
// SCROLL — Contact
// =====================
gsap.from('.contact-info, .contact-form', {
  scrollTrigger: {
    trigger: '.contact-grid',
    start: 'top 80%',
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out'
});

// =====================
// Formulaire
// =====================
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Message envoyé ✓';
  btn.style.background = '#3d6b4f';
  btn.disabled = true;
  e.target.reset();
}
