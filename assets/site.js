// Remembers the language the visitor picked and adds copy buttons to code blocks.
(function () {
  document.querySelectorAll('a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('lang', a.dataset.lang); } catch (e) {}
    });
  });

  if (!navigator.clipboard) return;
  var label = document.documentElement.lang === 'hu' ? ['Másolás', 'Másolva'] : ['Copy', 'Copied'];
  document.querySelectorAll('pre:not(.no-copy) > code').forEach(function (code) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = label[0];
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(code.innerText.trim()).then(function () {
        btn.textContent = label[1];
        setTimeout(function () { btn.textContent = label[0]; }, 1500);
      });
    });
    code.parentNode.appendChild(btn);
  });
})();
