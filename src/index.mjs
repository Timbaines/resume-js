import { renderResume } from './render.mjs';

try {
    const response = await fetch('../data/resume.json');

    if (!response.ok) {
        throw new Error(`Failed to load resume data. Status: ${response.status}`);
    }

    const data = await response.json()

    renderResume(data);

} catch (error) {
    console.error('Failed to load resume data');

    const main = document.querySelector('main');

    if (main) {
        main.innerHTML = `
        <h2>Failed to load resume data</h2>
        `
    }
}