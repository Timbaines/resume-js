import { renderHeader } from './sections/header.mjs'
import { renderSummary } from './sections/summary.mjs'

export function renderResume(data) {
    document.getElementById('header').innerHTML = renderHeader(data);
    document.getElementById('summary').innerHTML = renderSummary(data);
}