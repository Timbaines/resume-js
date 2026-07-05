export function renderEducation(education = []) {
    const educationListHTML = education
        .map(({ school, degree, date }) => `
            <article>
                <h3>${school}</h3>
                <p><strong>${degree}</strong> - ${date}</p>
            </article>
        `)
        .join('');

    return `
        <div class="section-container">
            <h2>Education</h2>
            <hr>
            ${educationListHTML}
        </div>
    `;
}