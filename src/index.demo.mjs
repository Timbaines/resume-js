try {
    const response = await fetch('../data/resume.json');

    if (!response.ok) {
        throw new Error(`Failed to load resume data. Status: ${response.status}`);
    }

    const data = await response.json()

// HEADER
    const header = document.getElementById('header');

    header.innerHTML = `
   <img src="${data.avatar}" alt="profile image">
   <h1>${data.name}</h1>
   <p>${data.title}</p>
   <a href="mailto:${data.contact.email}">${data.contact.email}</a>
   <a href="${data.contact.linkedIn}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
   <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
`;

// SUMMARY
    const summary = document.getElementById('summary');

    summary.innerHTML = `
    <h2>Professional Summary</h2>
    <p>${data.summary}</p>
`;

// SKILLS
    const skillsListHTML = data.skills
        .map(skill => `
        <li>
            <strong>${skill.category}:</strong>
            ${skill.items.join(', ')}
        </li>
    `)
        .join('');

    const skills = document.getElementById('skills');

    skills.innerHTML = `
    <h2>Skills</h2>
    <hr>
    <ul>
        ${skillsListHTML}
    </ul>
`;

// EXPERIENCE
    const experienceListHTML = data.experience
        .map(job => `
        <article>
            <h3>${job.company}</h3>
            <p><strong>${job.title}</strong> | ${job.dates}</p>
            <ul>
                ${job.description.map(items => `<li>${items}</li>`).join('')}
            </ul>
        </article>
    `)
        .join('');

    const experience = document.getElementById('experience');

    experience.innerHTML = `
    <h2>Experience</h2>
    <hr>
    ${experienceListHTML}
`;

// PROJECTS
    const projectListHTML = data.projects
        .map(project => `
        <article>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">View Project</a>
        </article>
    `)
        .join('');

    const projects = document.getElementById('projects');

    projects.innerHTML = `
    <h2>Projects</h2>
    <hr>
    ${projectListHTML}
`;

// EDUCATION
    const educationListHTML = data.education
        .map(educationItem => `
        <p>${educationItem.school} | ${educationItem.degree} - ${educationItem.date}</p>
    `)
        .join('');

    const education = document.getElementById('education');

    education.innerHTML = `
    <h2>Education</h2>
    <hr>
    ${educationListHTML}
`;

// CERTIFICATIONS
    const certificationsListHTML = data.certifications
        .map(certification => `
        <li>
          <strong>${certification.name}</strong> - ${certification.issuer}, ${certification.date}
        </li>
    `)
        .join('');

    const certifications = document.getElementById('certifications');

    certifications.innerHTML = `
    <h2>Certifications</h2>
    <hr>
    <ul>
        ${certificationsListHTML}
    </ul>
`;

// ACHIEVEMENTS
    const achievementsListHTML = data.achievements
        .map(achievement => `
        <li>
            <strong>${achievement.title}</strong> - ${achievement.description} - ${achievement.date}
        </li>
    `)
        .join('');

    const achievements = document.getElementById('achievements');

    achievements.innerHTML = `
    <h2>Achievements</h2>
    <hr>
    <ul>
        ${achievementsListHTML}
    </ul>
`;

// FOOTER
    const footer = document.getElementById('footer');

    footer.innerHTML = `
    <p>&copy; ${data.footer.copyrightYear} ${data.name}</p>
    <p>${data.footer.description}</p>
`;

} catch (error) {
    console.error('Failed to load resume data');

    const main = document.querySelector('main');

    if (main) {
        main.innerHTML = `
        <h2>Failed to load resume data</h2>
        `
    }
}