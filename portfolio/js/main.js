/* 포트폴리오 다크 버전 동작 (index-dark.html) — head에서 defer로 불러옴: HTML을 다 읽은 뒤 실행 */

// 조금이라도 스크롤하면 헤더에 배경을 깔고, 맨 위로 오면 뗌
(function () {
  var header = document.querySelector('header');
  function update() { header.classList.toggle('hwport_port_scrolled', window.scrollY > 0); }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// 핵심 숫자 카운터: 화면에 보이면 0 → 목표 숫자로 올라감
// (HTML에는 최종 숫자가 그대로 적혀 있어서, 스크립트가 안 돌아도 숫자는 보임)
(function () {
  var nums = document.querySelectorAll('.hwport_port_count[data-to]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  function run(el, delay) {
    var to = +el.dataset.to, dur = 1600, start = null;
    function tick(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);   // 빠르게 시작해서 천천히 멈춤
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(tick);
    }
    setTimeout(function () { requestAnimationFrame(tick); }, delay);
  }

  nums.forEach(function (el) { el.textContent = '0'; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var i = Array.prototype.indexOf.call(nums, e.target);
      run(e.target, 350 + i * 140);   // 순서대로 살짝씩 늦게 출발
      io.unobserve(e.target);
    });
  }, { threshold: 0.6 });
  nums.forEach(function (el) { io.observe(el); });
})();
