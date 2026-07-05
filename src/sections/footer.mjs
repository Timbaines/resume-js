export function renderFooter({ copyrightYear, description }) {
    return `
        <div class="footer-container">
            <div class="footer-content">
                <p>${copyrightYear}</p>
                <p>${description}</p>
            </div>
        </div>
    `;
}