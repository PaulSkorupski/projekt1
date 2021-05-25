const head = document.querySelector('head')!;

const addBtn: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll('.font-inc')!;
const subBtn: NodeListOf<HTMLSpanElement> =
    document.querySelectorAll('.font-dec')!;

let modifier = 1;

function update() {
    const oldSheet = document.querySelector('style');
    const sheet = document.createElement('style');
    sheet.innerHTML = `
        :root {
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
        }`;
    oldSheet && head.removeChild(oldSheet);
    head.appendChild(sheet);
}

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

update();
