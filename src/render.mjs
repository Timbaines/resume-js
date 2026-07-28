import { renderHeader } from './components/header.mjs'
import { renderSummary } from './components/summary.mjs'
import { renderSkills } from './components/skills.mjs'
import { renderExperience } from './components/experience.mjs'
import { renderProjects } from './components/projects.mjs'
import { renderEducation } from './components/education.mjs'
import { renderCertifications } from './components/certifications.mjs'
import { renderAchievements } from './components/achievements.mjs'
import { renderFooter } from './components/footer.mjs'
import { renderPrintButton, initPrintButton } from './components/printButton.mjs'

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

    if (!document.getElementById('print-btn')) {
        document.body.insertAdjacentHTML('beforeend', renderPrintButton());
        initPrintButton();
    }
}