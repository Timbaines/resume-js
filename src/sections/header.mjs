export function renderHeader({ name, title, contact }) {
    return `
        <div class="header-container">
            <div class="header-content">
                <div class="header-title">
                    <h1>${name}</h1>
                    <p class="text-secondary">${title}</p>
                </div>
                <div class="header-contact">
                    <a href="mailto:${contact.email}">${contact.email}</a>
                    <span>|</span>
                    <a href="${contact.linkedIn}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <span>|</span>
                    <a href="${contact.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    `;
}