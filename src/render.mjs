import { renderHeader } from './sections/header.mjs'

export function renderResume(data) {
    document.getElementById('header').innerHTML = renderHeader(data);
}