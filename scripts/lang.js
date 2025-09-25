// Language switcher function
function switchLanguage(lang) {
  var currentPath = location.pathname;
  var newPath;
  
  if (lang === 'ru') {
    // Switch to Russian
    if (currentPath.startsWith('/ru/')) {
      return; // Already on Russian version
    }
    newPath = '/ru' + currentPath;
  } else {
    // Switch to English 
    if (!currentPath.startsWith('/ru/')) {
      return; // Already on English version
    }
    newPath = currentPath.replace(/^\/ru/, '');
  }
  
  location.href = newPath;
}

// Auto-add language switcher to navigation
(function() {
  try {
    var navMenu = document.querySelector('.nav__menu');
    if (!navMenu) return;

    var isRu = location.pathname.startsWith('/ru/');
    
    // Only add if not already present in HTML
    if (!document.querySelector('.lang-switcher')) {
      var wrap = document.createElement('div');
      wrap.className = 'lang-switcher';
      wrap.style.display = 'inline-flex';
      wrap.style.alignItems = 'center';
      wrap.style.gap = '8px';
      wrap.style.marginLeft = '16px';

      var enBtn = document.createElement('button');
      enBtn.className = 'lang-btn' + (!isRu ? ' active' : '');
      enBtn.textContent = 'EN';
      enBtn.onclick = function() { switchLanguage('en'); };

      var ruBtn = document.createElement('button');
      ruBtn.className = 'lang-btn' + (isRu ? ' active' : '');
      ruBtn.textContent = 'RU';
      ruBtn.onclick = function() { switchLanguage('ru'); };

      wrap.appendChild(enBtn);
      wrap.appendChild(ruBtn);
      
      // Insert before CTA button
      var ctaBtn = navMenu.querySelector('.nav__cta-btn');
      if (ctaBtn) {
        navMenu.insertBefore(wrap, ctaBtn);
      } else {
        navMenu.appendChild(wrap);
      }
    }
  } catch (e) {
    console && console.warn && console.warn('Lang switch init failed', e);
  }
})();


