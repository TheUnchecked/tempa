// Tempa — pulsante del tema
(function () {
  var chiave = 'tempa-tema';

  function aggiornaEtichetta(btn) {
    var scuro = document.documentElement.getAttribute('data-theme') === 'dark';
    var testo = scuro ? 'Passa al tema chiaro' : 'Passa al tema scuro';
    btn.setAttribute('aria-label', testo);
    btn.setAttribute('title', testo);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    aggiornaEtichetta(btn);

    btn.addEventListener('click', function () {
      var scuro = document.documentElement.getAttribute('data-theme') === 'dark';
      if (scuro) {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      try {
        localStorage.setItem(chiave, scuro ? 'light' : 'dark');
      } catch (e) {}
      aggiornaEtichetta(btn);
    });
  });
})();