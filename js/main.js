import { toggleTheme, applyStoredTheme } from './theme-logic.js';

document.addEventListener('DOMContentLoaded', async () => {
    applyStoredTheme();
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});