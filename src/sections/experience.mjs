export function renderExperience(experience = []) {
    const experienceListHTML = experience
        .map(({ company, title, dates, description }) => `
            <article>
                <h3>${company}</h3>
                <p><strong>${title}</strong> | ${dates}</p>
                <ul>
                    ${description.map(item => `
                        <li>${item}</li>
                    `).join('')}
                </ul>
            </article>
        `)
        .join('');

    return `
        <div class="section-container">
            <h2>Experience</h2>
            <hr>
            ${experienceListHTML}
        </div>
    `;
}