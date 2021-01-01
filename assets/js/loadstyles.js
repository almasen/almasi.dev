/**
 * Defer loading of non-critical style elements.
 */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('preloadFontStyles').rel = 'stylesheet';
    document.getElementById('preloadIconStyles').rel = 'stylesheet';
});
