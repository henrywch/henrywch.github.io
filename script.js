(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const label = document.querySelector('.theme-label');
  const year = document.querySelector('[data-year]');
  const storageKey = 'henrywch-theme';

  function setTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';

    if (toggle) {
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    if (icon) icon.textContent = dark ? '☾' : '☼';
    if (label) label.textContent = dark ? 'Light' : 'Theme';
  }

  let stored = null;
  try {
    stored = window.localStorage.getItem(storageKey);
  } catch (error) {
    // Private browsing can disable localStorage; the system preference still works.
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(stored || (prefersDark ? 'dark' : 'light'));

  if (toggle) {
    toggle.addEventListener('click', function () {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(storageKey, next);
      } catch (error) {
        // Theme remains active for this page even when persistence is unavailable.
      }
      setTheme(next);
    });
  }

  if (year) year.textContent = new Date().getFullYear();
})();
