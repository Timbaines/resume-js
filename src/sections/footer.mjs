export function renderFooter({ copyrightYear, description }) {
    return `
        <div class="footer-container">
            <div class="footer-content">
                <p class="text-secondary">${copyrightYear}</p>
                <p class="text-secondary">${description}</p>
            </div>
        </div>
    `;
}