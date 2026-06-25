const data = await (await fetch('../data/resume.json')).json();
console.log(data);

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