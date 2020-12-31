/**
 * Decode email address into mailto href link and click it.
 * (for spam protection purposes)
 */
const getContactEmail = () => {
    window.location.href = `mailto:${atob("ZW5xdWlyaWVzQGFsbWFzaS5kZXY=")}`;
};
/**
 * Add event handler for emailLink element.
 * CSP v3 compliant
 */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('emailLink').addEventListener('click', getContactEmail);
});
