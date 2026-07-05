export function renderSkills(skills = []) {
    const skillsListHTML = skills
        .map(({ category, items }) => `
            <li>
                <strong>${category}:</strong>
                <span>${items.join(', ')}</span>
            </li>
        `)
        .join('');

    return `
        <div class="section-container">
            <h2>Skills</h2>
            <hr>
            <ul>
                ${skillsListHTML}
            </ul>
        </div>
    `;
}