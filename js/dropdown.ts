const anchor: HTMLParagraphElement =
    document.querySelector('.dropdown-anchor')!;
const container: HTMLDivElement = document.querySelector(
    '.dropdown-content-cont'
)!;

let isHidden = true;

anchor.addEventListener('click', () => {
    if (isHidden) {
        container.style.display = 'flex';
        isHidden = !isHidden;
    } else {
        container.style.display = 'none';
        isHidden = !isHidden;
    }
});
