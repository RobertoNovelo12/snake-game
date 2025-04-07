export function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.src = isDark ? 'images/sun-icon.svg' : 'images/moon-icon.svg';
    }
    redrawStickman(window.currentWrongCount || 0);
}

export function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    const root = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    if (storedTheme === 'dark') {
        root.classList.add('dark');
        if (themeIcon) themeIcon.src = 'images/sun-icon.svg';
    } else {
        root.classList.remove('dark');
        if (themeIcon) themeIcon.src = 'images/moon-icon.svg';
    }
}