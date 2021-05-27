const head = document.querySelector('head')!;
const gridBg: HTMLDivElement = document.querySelector('.about-content-grid')!;

// Button nodes
const addBtn: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll('.font-inc')!;
const subBtn: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll('.font-dec')!;
const contrastBtn: NodeListOf<HTMLLIElement> =
    document.querySelectorAll('.opt-theme')!;

// Control vars
let modifier = 1;
let useHighContrast = false;

// Dispatch
function update(): void {
    const oldSheet = document.querySelector('style');
    const sheet = document.createElement('style');
    sheet.innerHTML = `
        :root {
            /* fonts */
            --fs-100: ${0.85 * modifier}rem;
            --fs-200: ${0.9 * modifier}rem;
            --fs-300: ${1 * modifier}rem;
            --fs-400: ${1.05 * modifier}rem;
            --fs-500: ${1.15 * modifier}rem;
            --fs-600: ${1.2 * modifier}rem;
            --fs-700: ${1.25 * modifier}rem;
            --fs-800: ${1.3 * modifier}rem;
            --fs-900: ${1.35 * modifier}rem;
            --fs-1000: ${1.75 * modifier}rem;
            --fs-1100: ${2 * modifier}rem;
            --fs-dynamic-1: calc((${12 * modifier}px + 1vw) / 2);
            --fs-dynamic-2: calc((${14 * modifier}px + 1vw) / 2);
            --fs-dynamic-3: calc((${16 * modifier}px + 1vw) / 2);
            --fs-dynamic-4: calc((${17 * modifier}px + 1vw) / 2);
            /* colors */
            --bg-100: ${useHighContrast ? '#000000' : '#ffffff'};
            --bg-200: ${useHighContrast ? '#151515' : '#f4f5f8'};
            --bg-300: ${useHighContrast ? '#1f1f1f' : '#eef0f5'};
            --bg-400: ${useHighContrast ? '#2b2b2b' : '#e3e6ee'};
            --bg-accent: ${useHighContrast ? '#f4a024' : '#e6488b'};
            /* typography */
            --clr-100: ${useHighContrast ? '#33506b' : '#ffffff'};
            --clr-200: #6c799a;
            --clr-300: ${useHighContrast ? '#0080ff' : '#33506b'};
            --clr-accent: ${useHighContrast ? '#f4a024' : '#e6488b'};
            --clr-input: ${useHighContrast ? '#ffe000' : '#192734'};
            --clr-link: ${useHighContrast ? '#19f311' : '#7a11f3'};
        }
        `;
    oldSheet && head.removeChild(oldSheet);
    head.appendChild(sheet);
}

// Listeners
addBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        modifier += 0.25;
        if (modifier >= 2) {
            modifier = 2;
        }
        update();
    });
});

subBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        modifier -= 0.25;
        if (modifier <= 0.5) {
            modifier = 0.5;
        }
        update();
    });
});

contrastBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        useHighContrast = !useHighContrast;

        gridBg.style.background = `${
            useHighContrast
                ? 'url(./images/ninja-bg--dark.png) center no-repeat'
                : 'url(./images/ninja-bg.png) center no-repeat'
        }`;
        update();
    });
});

// Invoke update on load
update();
