(function() {
  try {
    var navMenu = document.querySelector('.nav__menu');
    if (!navMenu) return;

    var isRu = location.pathname.startsWith('/ru/');
    var path = location.pathname;
    var ruPath = isRu ? path : '/ru' + path;
    var enPath = isRu ? path.replace(/^\/ru/, '') : path;

    var wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    wrap.style.display = 'inline-flex';
    wrap.style.alignItems = 'center';
    wrap.style.gap = '8px';

    var ru = document.createElement('a');
    ru.href = ruPath;
    ru.className = 'nav__link';
    ru.textContent = 'RU';
    if (isRu) ru.style.color = 'var(--color-ai-blue)';

    var sep = document.createElement('span');
    sep.textContent = '|';
    sep.style.opacity = '0.6';

    var en = document.createElement('a');
    en.href = enPath;
    en.className = 'nav__link';
    en.textContent = 'EN';
    if (!isRu) en.style.color = 'var(--color-ai-blue)';

    wrap.appendChild(ru); wrap.appendChild(sep); wrap.appendChild(en);
    navMenu.appendChild(wrap);
  } catch (e) {
    console && console.warn && console.warn('Lang switch init failed', e);
  }
})();


