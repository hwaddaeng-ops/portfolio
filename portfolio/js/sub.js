/* 포트폴리오 서브페이지 동작 — head에서 defer로 불러옴 */

// 이미지 클릭 → 화면 가득 크게 보기 (바깥 클릭·닫기 버튼·Esc로 닫음)
(function () {
  var links = document.querySelectorAll('.hwport_port_zoom');
  if (!links.length) return;
  var box = null;

  function close() {
    if (!box) return;
    box.remove(); box = null;
    document.body.style.overflow = '';
  }

  function open(src, alt) {
    box = document.createElement('div');
    box.className = 'hwport_port_lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', alt || '확대 이미지');
    var img = document.createElement('img');
    img.src = src; img.alt = alt || '';
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'hwport_port_lightbox-close';
    btn.setAttribute('aria-label', '닫기'); btn.textContent = '×';
    var tip = document.createElement('p');
    tip.className = 'hwport_port_lightbox-tip';
    tip.textContent = '이미지를 클릭하면 원본 크기로 볼 수 있습니다';
    box.appendChild(btn); box.appendChild(img); box.appendChild(tip);
    // 이미지 클릭 = 원본 크기 ↔ 화면 맞춤, 바깥 클릭 = 닫기
    img.addEventListener('click', function (e) {
      e.stopPropagation();
      box.classList.toggle('hwport_port_lightbox-full');
    });
    box.addEventListener('click', close);
    document.body.appendChild(box);
    document.body.style.overflow = 'hidden';
    btn.focus();
  }

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var im = a.querySelector('img');
      open(a.getAttribute('href'), im ? im.alt : '');
    });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
