// ===== Tabs: Overview / Projects & Skills / Experience & Certificates =====
(function () {
  const panels = document.querySelectorAll('.panel');
  const links  = document.querySelectorAll('.side-nav a');

  function showTab(id) {
    const target = document.getElementById(id);
    if (!target || !target.classList.contains('panel')) id = 'overview';
    panels.forEach(p => p.classList.toggle('active', p.id === id));
    links.forEach(a => a.classList.toggle('current', a.dataset.tab === id));
    document.querySelector('.content').scrollTop = 0;
    history.replaceState(null, '', '#' + id);
  }

  links.forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    showTab(a.dataset.tab);
  }));

  showTab(location.hash.slice(1) || 'overview');
})();
var el = document.getElementById("typed-name");

if (el) {
  var word = "Aleezay";
  var i = 0;
  el.textContent = "";

  function type() {
    if (i < word.length) {
      i++;
      el.textContent = word.slice(0, i);
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 10000);
    }
  }

  function erase() {
    if (i > 0) {
      i--;
      el.textContent = word.slice(0, i);
      setTimeout(erase, 80);
    } else {
      setTimeout(type, 600);
    }
  }

  setTimeout(type, 400);
}