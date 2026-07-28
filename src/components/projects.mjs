export function renderProjects(projects = []) {
    const projectsListHTML = projects
        .map(({ name, description, url }) => `
            <article>
                <h3>${name}</h3>
                <p>${description}</p>
                <a class="link-primary" href="${url}" target="_blank" rel="noopener noreferrer">View Project</a>
            </article>
        `)
        .join('');

    return `
        <div class="section-container">
            <h2>Projects</h2>
            <hr>
            ${projectsListHTML}
        </div>
    `;
}