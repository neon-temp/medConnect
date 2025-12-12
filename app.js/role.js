document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');

  function setDarkMode() {
    const allElements = document.querySelectorAll('*:not(button):not(button *):not(.btn):not(.btn *)');
    allElements.forEach(el => {
      el.style.backgroundColor = '#1e1e1e';
      el.style.color = 'white';
    });

    themeToggle?.setAttribute('name', 'moon-outline');
    localStorage.setItem('theme', 'dark');
  }

  function setLightMode() {
    const allElements = document.querySelectorAll('*:not(button):not(button *):not(.btn):not(.btn *)');
    allElements.forEach(el => {
      el.style.backgroundColor = '';
      el.style.color = '';
    });

    themeToggle?.setAttribute('name', 'contrast-outline');
    localStorage.setItem('theme', 'light');
  }

  if (localStorage.getItem('theme') === 'dark') {
    setDarkMode();
  } else {
    setLightMode();
  }

  themeToggle?.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark') {
      setLightMode();
    } else {
      setDarkMode();
    }
  });
});
