export function renderCertifications(certifications = []) {
    const certificationsListHTML = certifications
        .map(({ name, issuer, date }) => `
            <article>
                <h3>${name}</h3>
                <p>${issuer}</p>
                <p>Issued: ${date}</p>
            </article>
        `)
        .join('');

    return `
        <div class="section-container">
            <h2>Certifications & Professional Development</h2>
            <hr>
            ${certificationsListHTML}
        </div>
    `;
}