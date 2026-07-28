export function renderAchievements(achievements = []) {
    const achievementsListHTML = achievements
        .map(({ title, description, date }) => `
            <article>
                <h3>${title}</h3>
                <p>${description}</p>
                <p class="text-secondary">${date}</p>
            </article>
        `)
        .join('');

    return `
        <div class="section-container">
            <h2>Achievements</h2>
            <hr>
            ${achievementsListHTML}
        </div>
    `;
}