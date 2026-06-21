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