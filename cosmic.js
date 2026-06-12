/* Cosmic theme helpers: starfield, scroll-reveal, image lightbox */
(function () {
  // --- Starfield layers ---
  function layer(cls) { var d = document.createElement('div'); d.className = cls; return d; }
  document.body.prepend(layer('stars'), layer('stars2'), layer('stars3'));

  var shoot = document.createElement('div');
  shoot.className = 'shooting';
  shoot.innerHTML = '<span></span><span></span><span></span>';
  document.body.prepend(shoot);

  // --- Scroll reveal ---
  function setupReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  // --- Lightbox for figures ---
  function setupLightbox() {
    var imgs = document.querySelectorAll('.showcase-fig img');
    if (!imgs.length) return;
    var box = document.createElement('div');
    box.style.cssText = 'position:fixed;inset:0;z-index:5000;display:none;align-items:center;' +
      'justify-content:center;background:rgba(2,4,14,0.92);backdrop-filter:blur(6px);cursor:zoom-out;padding:2rem;';
    var big = document.createElement('img');
    big.style.cssText = 'max-width:95%;max-height:92%;border-radius:12px;box-shadow:0 0 50px rgba(91,140,255,0.5);';
    box.appendChild(big);
    document.body.appendChild(box);
    imgs.forEach(function (im) {
      im.addEventListener('click', function () { big.src = im.src; box.style.display = 'flex'; });
    });
    box.addEventListener('click', function () { box.style.display = 'none'; });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') box.style.display = 'none'; });
  }

  if (document.readyState !== 'loading') { setupReveal(); setupLightbox(); }
  else document.addEventListener('DOMContentLoaded', function () { setupReveal(); setupLightbox(); });
})();
