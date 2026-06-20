const data = await (await fetch('../data/resume.json')).json();
console.log(data);

const header = document.getElementById('header');
header.innerHTML = `
   <img src="${data.avatar}" alt="profile image">
   <h1>${data.name}</h1>
   <p>${data.title}</p>
   <a href="mailto:${data.contact.email}">${data.contact.email}</a>
   <a href="${data.contact.linkedIn}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
   <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
`;