export function renderPrintButton() {
    return `
        <button 
            id="print-btn" 
            class="print-button" 
            aria-label="Print resume"
            title="Print resume (Ctrl+P)"
            type="button"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            <span>Print PDF</span>
        </button>
    `;
}

export function initPrintButton() {
    const printBtn = document.getElementById('print-btn');

    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}