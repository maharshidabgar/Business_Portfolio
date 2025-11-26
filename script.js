/* Home and Contact files JS is internal */


/*ABOUT-JS*/

const t = document.querySelector(".typing");
if (t) {
  const words = ["AI Chatbots", "ML Models", "Automation Tools", "Web Apps"];
  let i = 0, j = 0, del = false;
  (function type() {
    const w = words[i];
    t.textContent = w.slice(0, j);
    j += del ? -1 : 1;
    if (j === w.length && !del) return (del = true, setTimeout(type, 1000));
    if (j === 0 && del) (del = false, i = (i + 1) % words.length);
    setTimeout(type, del ? 70 : 110);
  })();
}

document.querySelectorAll(".about-section, .mv-box, .team-card").forEach(el => {
  el.classList.add("fade");
  new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add("show")), {threshold: 0.2}).observe(el);
});


/*SERVICES-JS*/

document.querySelectorAll(".service-card").forEach(card => {
  card.style.cssText = "opacity:0;transform:translateY(30px);transition:0.6s ease";
  new IntersectionObserver(e => 
    e.forEach(x => x.isIntersecting && (x.target.style.cssText = "opacity:1;transform:translateY(0);transition:0.6s ease"))
  , { threshold: 0.2 }).observe(card);
});


/*GALLERY-JS*/

let currentSlide = 0;
function moveSlide(i) {
  const s = document.getElementById("gallerySlider");
  console.log("Gallery Loaded");
  const w = s.children[0].offsetWidth + 15;
  s.scrollTo({ left: w * i, behavior: "smooth" });
  document.querySelectorAll(".dot").forEach((d, x) => d.classList.toggle("active", x === i));
  currentSlide = i;
}

/*PRODUCTS-JS*/

const t = document.getElementById("animatedText");
t && (t.style.opacity = "0", setTimeout(() => (t.style.cssText = "opacity:1;transition:1s"), 300));

document.querySelectorAll(".product-card").forEach(card => {
  card.style.cssText = "opacity:0;transform:translateY(30px);transition:0.6s ease";
  new IntersectionObserver(e =>
    e.forEach(x => x.isIntersecting && (x.target.style.cssText = "opacity:1;transform:translateY(0);transition:0.6s ease")),
  { threshold: 0.2 }).observe(card);
});
