let btn = document.querySelector('.knopka');
window.addEventListener(
  'scroll',
  function () {
    if (window.pageYOffset > 20) {
      btn.style.opacity = '1';
    } else {
      btn.style.opacity = '0';
    }
  },

  (btn.onclick = function () {
    window.scrollTo(0, 0);
  }),
);
