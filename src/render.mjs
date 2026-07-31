import {renderHeader} from './components/header.mjs'
import {renderSummary} from './components/summary.mjs'
import {renderSkills} from './components/skills.mjs'
import {renderExperience} from './components/experience.mjs'
import {renderProjects} from './components/projects.mjs'
import {renderEducation} from './components/education.mjs'
import {renderCertifications} from './components/certifications.mjs'
import {renderAchievements} from './components/achievements.mjs'
import {renderFooter} from './components/footer.mjs'
import {initPrintButton, renderPrintButton} from './components/printButton.mjs'

const sections = [
    { id: 'header', component: renderHeader },
    { id: 'summary', component: renderSummary },
    { id: 'skills', component: renderSkills, dataKey: 'skills' },
    { id: 'experience', component: renderExperience, dataKey: 'experience' },
    { id: 'projects', component: renderProjects, dataKey: 'projects' },
    { id: 'education', component: renderEducation, dataKey: 'education' },
    { id: 'certifications', component: renderCertifications, dataKey: 'certifications' },
    { id: 'achievements', component: renderAchievements, dataKey: 'achievements' },
    { id: 'footer', component: renderFooter, dataKey: 'footer' },
]

export function renderResume(data) {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const id = section.id;
        const component = section.component;
        const dataKey = section.dataKey;
        document.getElementById(id).innerHTML = dataKey ? component(data[dataKey]) : component(data);
    }
    console.log(data);

    if (!document.getElementById('print-btn')) {
        document.body.insertAdjacentHTML('beforeend', renderPrintButton());
        initPrintButton();
    }
}