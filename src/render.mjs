import { renderHeader } from './sections/header.mjs'
import { renderSummary } from './sections/summary.mjs'
import { renderSkills } from './sections/skills.mjs'
import { renderExperience } from './sections/experience.mjs'
import { renderProjects } from './sections/projects.mjs'
import { renderEducation } from './sections/education.mjs'
import { renderCertifications } from './sections/certifications.mjs'
import { renderAchievements } from './sections/achievements.mjs'
import { renderFooter } from './sections/footer.mjs'

export function renderResume(data) {
    document.getElementById('header').innerHTML = renderHeader(data);
    document.getElementById('summary').innerHTML = renderSummary(data);
    document.getElementById('skills').innerHTML = renderSkills(data.skills);
    document.getElementById('experience').innerHTML = renderExperience(data.experience);
    document.getElementById('projects').innerHTML = renderProjects(data.projects);
    document.getElementById('education').innerHTML = renderEducation(data.education);
    document.getElementById('certifications').innerHTML = renderCertifications(data.certifications);
    document.getElementById('achievements').innerHTML = renderAchievements(data.achievements);
    document.getElementById('footer').innerHTML = renderFooter(data.footer);
}